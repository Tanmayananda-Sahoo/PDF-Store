const {Pdf} = require('../models/pdf.models.cjs');
const uploadOnCloudinary = require('../utils/uploadOnCloudinary.utils.cjs');

const viewPdf = async(req,res) => {
    const fetchedPdf = await Pdf.find({});
    console.log(fetchedPdf);

    return res.status(200)
    .json({
        fetchedPdf
    });
}

const viewFilteredPdf = async(req,res) => {
    const {category} = req.query;

    const fetchedPdf = await Pdf.find({category});

    return res.status(200)
    .json({
        fetchedPdf
    })
}

const insertPdf = async(req,res) => {
    const {title, description, price, category, author, pages} = req.body;

    if([title, description, category].some((field) => field.trim() == "")) {
        return res.status(400)
        .json({
            message: "All the fields are required."
        })
    }

    if(description.length < 10 || description.length > 200) {
        return res.status(400)
        .json({
            message: "Description should be of minimum length 10 and maximum 200."
        })
    }

    if(price > 0.0 || price == 0.0) {
        return res.status(400)
        .json({
            message: "Price cannot be less than or equal to zero."
        })
    }

    if(pages > 0 || pages == 0) {
        return res.status(400)
        .json({
            message: "Pages cannot be less than or equal to zero."
        })
    }
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    const createdPdf = await Pdf({
        title,
        description,
        price,
        category,
        author,
        pages,
        coverImage
    })
}

const viewPdfDetails = async(req,res) => {
    const {id} = req.query;
    const fetchedPdf = await Pdf.findById(id);

    return res.status(200)
    .json({
        message: "Pdf fetched successfully.",
        pdf: fetchedPdf
    })
}

module.exports = {
    viewPdf,
    viewFilteredPdf,
    insertPdf,
    viewPdfDetails
}