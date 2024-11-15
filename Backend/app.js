const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const Listing = require("./modals/data.modal");
const { connectdb } = require("./config/MongoDB")
const customError = require("./utils/customErrorHandle")

const passport = require("passport")
const LocalStrategy = require("passport-local");
var GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require("./modals/user.modal");
require('dotenv').config();

// Routers 
const userRouter = require("./routes/user.router")
const commRouter = require("./routes/community.router")
const reviewComunity = require("./routes/communityReview.router")
const auth = require("./routes/auth.router")
const contact = require("./routes/contact.router")
const donations = require("./routes/donations.router")
const reciever = require("./routes/reciever.router")
// const listingRouter = require('./routes/listing.router');

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow credentials (cookies)
}));

app.use(express.json());
app.use(cookieParser());

// Mongo connection
connectdb(process.env.MONGO_URI);
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.SECRET_KEY

// Session setup
const session = require("express-session");
const MongoStore = require("connect-mongo");

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    crypto: {
        secret: process.env.SESSION_SECRET,
    },
    touchAfter: 24 * 3600 // In seconds
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: false,
        signed: false
    }
}));

// Initialize Passport.js and use session
app.use(passport.initialize());
app.use(passport.session());

// Passport.js setup
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new GoogleStrategy({
    clientID: clientId,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:8090/auth/google/callback",
    // passReqToCallback: true
    scope: ["profile", "email"]
},
    async function (request, accessToken, refreshToken, profile, done) {
        // console.log("profile", profile);
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = new User({
                    googleId: profile.id,
                    name: profile.displayName,
                    username: profile.name.givenName,
                    email: profile.emails[0].value,
                    image: {
                        url: profile.photos[0].value, // Set the image URL from Google profile
                        imgName: 'google-profile-photo' // Optional, can be adjusted as needed
                    }
                })
                await user.save();
            }
            return done(null, user)
        } catch (error) {
            return done(error, null)
        }
    }
));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser((user, done) => {
    done(null, user); // Save user ID to session
});

// Custom Deserialize User
passport.deserializeUser((user, done) => {
    done(null, user); // Save user ID to session
});

// Routes
app.get("/", (req, res) => {
    res.send("i am at root")
})
// app.use("/", listingRouter)
app.use("/", userRouter)
app.use("/", commRouter)
app.use("/", reviewComunity)
app.use("/", auth)
app.use("/", contact)
app.use("/", donations)
app.use("/", reciever)

app.use((err, req, res, next) => {
    // console.log("------ERROR------");
    let { status = 500, message, success } = err;
    res.status(status).json({ message, success })
});

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server listening at port ${port}`);
});