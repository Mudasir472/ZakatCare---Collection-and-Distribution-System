const User = require("../modals/user.modal");
const passport = require("passport")


module.exports.login = async (req, res) => {
    try {
        // Access the session ID on the server side
        const sessionId = req.sessionID;
        const user = req.user;
        // console.log(user)
        res.status(200).json({ message: "Login successful", user: req.user, sessionId });

    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "Login failed", redirectUrl: "/zakatcare/login", error: e.message });
    }
}

module.exports.signup = async (req, res) => {
    try {

        const { name, email, username, password, role } = req.body;
        // Define a regex pattern to ensure the password contains at least one special character, one letter, and one number
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        // Validate the password
        if (!passwordPattern.test(password)) {
            return res.status(400).json({
                message: "Password must contain at least one letter, one number, and one special character (@, $, !, %, *, #, ?, &).",
                redirectUrl: "/zakatcare/signup"
            });
        }
        const newUser = new User({ name, username, email, role });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                console.log('Login error after signup:', err);
                return res.status(500).json({ message: "Login after signup failed", redirectUrl: "/zakatcare/login" });
            }
            const sessionId = req.sessionID;
            res.status(200).json({ message: "Signup successful", redirectUrl: "/", sessionId });
            console.log('Signup successful');
        });

    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: e.message, redirectUrl: "/zakatcare/signup", error: e.message });
    }
}

module.exports.logout = (req, res) => {
    req.logOut((err) => {
        if (err) {
            res.send(err);
        }
        res.clearCookie('connect.sid');
        res.status(200).json({ message: "Logout successful", redirectUrl: "/", });
    })
}

module.exports.profile = async (req, res) => {
    // By Hbbn
    try {
        const userId = req.user._id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized or userId not found"
            })
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "User found",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports.updateUser = async (req, res) => {
    // const {name,username,body}=req.body;
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { ...req.body })
    res.status(200).json({ msg: "user update success" });
}

module.exports.changeProfile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: "No file uploaded" });
        }

        // Assuming req.user contains the logged-in user's information
        const userId = req.user._id;
        const filePath = req.file.path; // Path to the uploaded file

        // Update the user's profile picture in the database
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { 'image.url': filePath }, // Update the image URL field; adjust field as per your schema
            { new: true } // Return the updated document
        );

        res.status(200).json({ message: "Profile picture updated successfully!", user: updatedUser });
    } catch (error) {
        console.error('Error uploading the file:', error);
        res.status(500).json({ message: "Failed to update profile picture", error: error.message });
    }
}