const Reciever = require("../modals/reciever.modal");

module.exports.recieverDetailsPost = async (req, res) => {
    try {
        const { fullname, email, about, address, city, state, pincode, category, aadhar, bankOwner, account, bankName, branch, ifsc } = req.body;

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
            bankOwner,
            account,
            bankName,
            branch,
            ifsc,
            certificates,// Store the aadhar file path
            uploadAdhaar, // Store the aadhar file path
        });
        await recieverData.save();
        console.log(recieverData)
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
}
module.exports.recieverDetailsGet = async (req, res) => {
    try {
        const recieverData = await Reciever.find({})
        const totalRecievers = await Reciever.countDocuments({ paymentStatus: "Done" });
        res.status(200).json({
            recieverData,
            totalRecievers,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports.updateStatus = async (req, res) => {
    try {
        const { id, status } = req.body;
        const updateStatus = await Reciever.findByIdAndUpdate(id, { status: status })
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
}

module.exports.paymentStatus = async (req, res) => {
    try {
        const { id, paymentStatus } = req.body;
        const updateStatus = await Reciever.findByIdAndUpdate(id, { paymentStatus: paymentStatus })
        if (updateStatus) {
            res.status(200).json({ message: 'paymentStatus updated successfully', updateStatus });
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
}