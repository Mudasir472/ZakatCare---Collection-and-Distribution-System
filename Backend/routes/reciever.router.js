const express = require("express");
const router = express.Router({ mergeParams: true });
const Reciever = require("../modals/reciever.modal");

const { storage } = require("../cloudConfig");
const multer = require('multer');
const upload = multer({ storage });

// Using multer middleware to handle multiple file uploads
router.post("/zakatcare/recieve-details", upload.fields([{ name: 'fileAadhar' }, { name: 'certificate' }]), async (req, res) => {
    try {
        const { fullname, email, about, address, city, state, pincode, category, aadhar } = req.body;

        // Get the file information if uploaded
        const uploadAdhaar = req.files['fileAadhar'] ? req.files['fileAadhar'][0].path : null;
        const certificates = req.files['certificate'] ? req.files['certificate'][0].path : null;

        // Create the new receiver record
        const recieverData = new Reciever({
            fullname,
            email,
            about,
            address,
            city,
            state,
            pincode,
            aadhar,
            category,
            certificates,// Store the aadhar file path
            uploadAdhaar, // Store the aadhar file path
        });
        await recieverData.save();

        res.status(200).json({
            message: "Details successfully recorded",
            success: true,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            err: err.message || "An error occurred while saving details",
            success: false,
        });
    }
});

router.get('/zakatcare/recieve-details', async (req, res) => {
    try {
        const recieverData = await Reciever.find({})
        res.status(200).json({
            recieverData,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

router.post('/zakatcare/update-status', async (req, res) => {
    try {
        const {id,status} = req.body;
        const updateStatus = await Reciever.findByIdAndUpdate(id,{status:status})
        if (updateStatus) {
            res.status(200).json({ message: 'Status updated successfully', updateStatus });
        } else {
            res.status(404).json({ message: 'Reciever not found' });
        }
        console.log(updateStatus)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router;
