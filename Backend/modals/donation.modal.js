const mongoose = require('mongoose');
const { Schema } = mongoose;

const donationSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        trim: true,
        lowercase: true,
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true,
    },
    city: {
        type: String,
        required: [true, 'City is required'],
        trim: true,
    },
    state: {
        type: String,
        required: [true, 'State is required'],
        trim: true,
    },
    pincode: {
        type: Number,
        required: [true, 'Pincode is required'],
        min: [100000, 'Pincode should be at least 6 digits'],
        max: [999999, 'Pincode should not exceed 6 digits'],
    },
    amount: {
        type: Number,
        required: [true, 'Donation amount is required'],
        min: [1, 'Donation amount should be at least 1'],
    },
    category: {
        type: String,
        required: [true, 'Donation category is required'],
        enum: {
            values: ['Education', 'Relief', 'Marriage', 'Feeding the Poor'], 
            
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
