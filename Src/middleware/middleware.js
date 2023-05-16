//Required;
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');


//Customes middleware (Act);
const processImage = async (req, res, next) => {
    try {
        let imagePath = path.join(__dirname, '..', 'Src', req.product.file_path, req.product.file_name);
        const image = await fs.promises.readFile(imagePath);
        const compressedImage = await sharp(image)
            .resize(800, 600)
            .jpeg({ quality: 80 })
            .toBuffer();

        let imageurl = compressedImage.toString('base64');
        let contentType = 'image/jpg';
        if (req.product.file_name.endsWith('.PNG')) {
            contentType = 'image/png';
        }
        req.product.file_name = "data:" + contentType + ";base64, " + imageurl;
        next();
    } catch (err) {
        console.error("Error while processing image:", err);
        next(err);
    }
}



//Model export;
module.exports = processImage;
