const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const Contact = require('../modals/Contact.modal');

router.post("/zakatcare/contact", wrapAsync(async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ msg: "All fields are required." });
    }

    const contactData = new Contact({ name, email, phone, message });

    try {
        await contactData.save(); // Wait for the save operation
        res.status(200).json({ msg: "Success" });
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}));

router.get("/zakatcare/contact", wrapAsync(async (req, res) => {
    try {
        const contacts = await Contact.find({});
        res.status(200).json({ contacts });
    } catch (error) {
        console.error('Error fetching contact data:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}));

module.exports = router;
