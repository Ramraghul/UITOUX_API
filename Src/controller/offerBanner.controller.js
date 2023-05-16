//Require;
const DB = require('../config/config');

//Middleware (act);
const processImage  = require('../middleware/middleware');

//Get All Offer;
const getOfferBanner = (req, res) => {
    try {
        let data = "SELECT * FROM `banner` WHERE `offer`='true'";
        DB.query(data, async (err, resultData) => {
            if (err) {
                throw err;
            } else {
                // Filter the products that have an image
                const productsWithImage = resultData.filter(product => product.file_name !== null);
                // Call the processImage middleware for each product that has an image
                await Promise.all(productsWithImage.map(product => processImage({ product }, {}, () => { })));

                res.status(200).json(resultData);
            }
        });
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' });
    }
}


//Export
module.exports = {
    getOfferBanner
}