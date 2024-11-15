const express = require("express");
const passport = require("passport")
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync")
const { isAuthenticated } = require("../Middlewares")

const userController = require('../controllers/user.controller')

const { storage } = require("../cloudConfig");
const multer = require('multer');
const Team = require("../modals/team.modal");
// const zakatcare = require("../modals/data.modal");
const upload = multer({ storage });

//user router
router.post("/zakatcare/login", passport.authenticate('local'), wrapAsync(userController.login));

router.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    },
    ));
router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173/',
        failureRedirect: 'http://localhost:5173/login'

    }));
router.get("/login/success", (req, res) => {
    const sessionId = req.sessionID;

    res.status(200).json({ message: "Login successful", redirectUrl: "/", user: req.user, sessionId })
})

router.post("/zakatcare/signup", userController.signup)

router.post("/zakatcare/logout", userController.logout)

router.get("/zakatcare/profile", isAuthenticated, userController.profile)

router.get("/zakatcare/userdetails", isAuthenticated, wrapAsync((req, res) => {
    res.status(200).json({ message: "user detail", user: req.user })
}))

router.put("/zakatcare/updateuser/:id", isAuthenticated, userController.updateUser)

router.post("/zakatcare/changeprofile", isAuthenticated, upload.single("profilePic"), wrapAsync(userController.changeProfile));

router.get("/zakatcare/teammembers", wrapAsync(async (req, res) => {
    const indexData = await Team.find({});
    res.send(indexData);
}))

router.get("/zakatcare/getuser", (req, res) => {
    res.status(200).json({ message: "user", user: req.user })
})
module.exports = router;

