const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Set the filename to current timestamp + original name
    }
})

exports.upload = multer({ storage: storage })