const mongoose = require('mongoose');

const pdfSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: "",
        minLength: 10,
        maxLength: 200
    },
    coverImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["fiction", "business", "technology", "selfhelp", "academic", "cooking"]
    },
    author: {
        type: String,
        required: false,
        default: "None"
    },
    rating: {
        type: Number,
        required: false
    },
    reviews: {
        type: Number,
        required: false
    },
    pages: {
        type: Number,
        required: true
    }
})

const Pdf = new mongoose.model("Pdf", pdfSchema);

module.exports = {
    Pdf
}