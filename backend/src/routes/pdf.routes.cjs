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

router.post('/insert',
    upload.fields([
        {
            name:"coverImage",
            maxCount:1
        }
    ]), verifyAdmin, insertPdf);
router.get('/view-pdf', viewPdf);
router.get('/view-pdf/:category', viewFilteredPdf);
router.get('/view-details/:id', viewPdfDetails);