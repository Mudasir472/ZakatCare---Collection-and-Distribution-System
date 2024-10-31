const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../modals/user.modal');


// Configure Nodemailer for sending emails
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "bhatmuddu472@gmail.com",
        pass: "iqdr riqu qsna wpct",
    },
});
module.exports.forgetPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'No account with that email address exists.' });
        }

        // Generate a reset token
        const token = crypto.randomBytes(20).toString('hex');

        // Set the reset token and expiration
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

        // Save the user with the token and expiration time
        await user.save();



        const mailOptions = {
            to: user.email,
            from: 'bhatmuddu472@gmail.com',
            subject: 'Password Reset',
            text: `You are receiving this because you have requested to reset your password.\n\n
                    Please click on the following link, or paste it into your browser to complete the process:\n\n
                    http://localhost:5173/reset-password/${token}\n\n
                    If you did not request this, please ignore this email.\n`
        };

        const info = await transporter.sendMail(mailOptions, (err) => {
            if (err) return res.status(500).json({ message: 'Error sending email.' });
            return res.status(200).json({ message: 'Password reset email sent!' });
        });


    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Error processing the request.' });

    }
}

module.exports.resetPassword = async (req, res) => {
    try {
        // Find the user by token and check if it's not expired
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() } // Ensure token is not expired
        });

        // If no user is found, return an error
        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired.' });
        }

        // Check if the passwords match
        if (req.body.password === req.body.confirmPassword) {

            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            // Validate the password
            if (!passwordPattern.test(req.body.password)) {
                return res.status(400).json({
                    message: "Password must contain at least one letter, one number, and one special character (@, $, !, %, *, #, ?, &).",
                    redirectUrl: "/zakatcare/login"
                });
            }
            // Use setPassword from passport-local-mongoose
            user.setPassword(req.body.password, async (err) => {
                if (err) return res.status(500).json({ message: 'Error setting new password.' });

                // Clear the reset token and expiration
                user.resetPasswordToken = undefined;
                user.resetPasswordExpires = undefined;

                // Save the updated user
                try {
                    await user.save();
                    return res.status(200).json({ message: 'Password reset successful!' });
                } catch (saveErr) {
                    return res.status(500).json({ message: 'Error saving new password.' });
                }
            });
        } else {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }
    } catch (err) {
        // Handle any other errors
        return res.status(500).json({ message: 'An error occurred during the password reset process.' });
    }
}