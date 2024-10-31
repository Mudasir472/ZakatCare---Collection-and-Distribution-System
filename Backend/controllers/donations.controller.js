const Donation = require("../modals/donation.modal");


module.exports.donationPost = async (req, res) => {
    try {
        const { firstname, lastname, email, address, city, state, pincode, amount, category } = req.body
        const donationData = await Donation({
            firstname,
            lastname,
            email,
            address,
            city,
            state,
            pincode,
            amount,
            category
        })
        await donationData.save();
        res.status(200).json({
            message: "Donation successfully recorded",
            success: true,
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({
            err,
            success: false
        })
    }
}

module.exports.donationGet = async (req, res) => {
    try {
        // Get the current date
        const currentDate = new Date();
        // Get the start of the year
        const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
        const allDonations = await Donation.find({});

        // Aggregate donations from the start of the year up to the current date
        const monthlyDonations = await Donation.aggregate([
            {
                $match: {
                    date: { $gte: startOfYear, $lte: currentDate }
                }
            },
            {
                $group: {
                    _id: {
                        $month: "$date" // Group by month (1 = January, 12 = December)
                    },
                    totalAmount: { $sum: "$amount" } // Sum the total donations for each month
                }
            },
            {
                $sort: { _id: 1 } // Sort by month
            }
        ]);

        // Format the data to map month numbers to month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const formattedData = monthlyDonations.map(donation => ({
            month: monthNames[donation._id - 1], // Convert month number to month name
            totalAmount: donation.totalAmount || 0 // Default to 0 if no donations
        }));

        // Ensure all months of the year are included in the response
        const allMonthsData = monthNames.map((monthName, index) => ({
            month: monthName,
            totalAmount: formattedData.find(d => d.month === monthName)?.totalAmount || 0
        }));
        // Calculate the total amount of all donations
        const totalAmountOfDonations = allDonations.reduce((acc, donation) => acc + donation.amount, 0);
        // Find the total number of unique donors
        const totalUniqueDonors = await Donation.distinct("donorId").countDocuments();
        res.status(200).json({
            message: "fetch success",
            allMonthsData,
            allDonations,
            totalAmountOfDonations,
            totalUniqueDonors
        });
    } catch (error) {
        console.error('Error fetching monthly donations:', error);
        res.status(500).json({ message: 'Error fetching monthly donations' });
    }
}