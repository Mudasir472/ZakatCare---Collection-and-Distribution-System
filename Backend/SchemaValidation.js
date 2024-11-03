const Joi = require('joi');

// Reciever Validation Schema
module.exports.recieverValidationSchema = Joi.object({
    fullname: Joi.string()
        .trim()
        .required(),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .trim()
        .lowercase()
        .required(),

    about: Joi.string()
        .required(),

    address: Joi.string()
        .trim()
        .required(),

    city: Joi.string()
        .trim()
        .required(),

    state: Joi.string()
        .trim()
        .required(),

    pincode: Joi.string()
        .pattern(/^\d{6}$/)
        .required(),

    category: Joi.string()
        .valid('Education', 'Relief', 'Marriage', 'Feeding the Poor')
        .required(),

    aadhar: Joi.number()
        .required(),

    bankOwner: Joi.string()
        .required(),

    account: Joi.number()
        .required(),

    bankName: Joi.string()
        .required(),

    branch: Joi.string()
        .required(),

    ifsc: Joi.string()
        .required(),

    uploadAdhaar: Joi.string(),

    status: Joi.string()
        .valid('Pending', 'Approved', 'Rejected')
        .default('Pending'),

    paymentStatus: Joi.string()
        .valid('Done', 'Pending')
        .default('Pending'),

    date: Joi.date().default(Date.now),
});

