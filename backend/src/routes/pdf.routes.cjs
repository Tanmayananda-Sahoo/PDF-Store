const upload = require('../middlewares/multer.middlewares.cjs');
const {Pdf} = require("../models/pdf.models.cjs");
const verifyAdmin = require('../middlewares/verifyAdmin.middlewares.cjs');
const express = require('express');
const {
    viewPdf,
    viewFilteredPdf,
    insertPdf,
    viewPdfDetails
} = require('../controllers/pdf.controller.cjs');

const router = express.Router();

router.route('/insert').post(
    upload.fields([
        {
            name:"coverImage",
            maxCount:1
        }
    ]), 
    verifyAdmin, insertPdf);
router.route('/view-pdf').get(viewPdf);
router.route('/view-pdf/:category').get(viewFilteredPdf);
router.route('/view-details/:id').get(viewPdfDetails);

module.exports = router;