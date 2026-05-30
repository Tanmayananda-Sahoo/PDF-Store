const multer = require('multer');

const storage = multer.diskStorage({   // This method is used to store the user sent file in disk.
    destination: function(req,file,cb) {   //We give destination of the file to be stored using this. We pass a request a file and a callback function. In the callback function we pass the destination of the file to be stored.
        cb(null,'./public/temp');
    },

    filename: function(req,file,cb) {  //We give the filename of the file. Also here we pass the request file and callback function. in the callback function we pass the file name. 
        cb(null, file.originalname);
    }
})

const upload = multer({   //Here we export the utility we prepared.
    storage,
})

module.exports = upload;