const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    pdfs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Pdf"
    },
    size: {
        type: Number,
        default: 0
    }
})