const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url: process.env.DATABASE,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-file-user-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "images",
            filename: `${Date.now()}-file-user-${file.originalname}`,
        };
    },
})
module.exports = multer({storage}).single('image');