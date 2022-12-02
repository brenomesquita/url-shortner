const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        long_url: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        short_url: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
    },
    {
        timestamps: true,
    },
);

const urlModel = mongoose.model('Url', urlSchema);
urlSchema.index({createdAt: 1},{ expireAfterSeconds: 86400 });

module.exports = urlModel;
