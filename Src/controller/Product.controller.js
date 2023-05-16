//Require;
const DB = require('../config/config');

//Middleware (act);
const processImage  = require('../middleware/middleware');

//Get All product;
const getAllProduct = (req, res) => {
    try {
        let data = "SELECT * FROM `product`";
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


//Get product by id;
const getProductById = (req, res) => {
    try {
        const id = req.params.id
        let data = "SELECT * FROM `product` WHERE id=?";
        DB.query(data,id,async (err, resultData) => {
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

//All vehicle;
const getAllVehicle = (req, res) => {
    try {
        let data = "SELECT `vehicle_name` FROM `product`";
        DB.query(data,(err, resultData) => {
            if (err) {
                throw err;
            } else {
                res.status(200).json(resultData);
            }
        });
    } catch (error) {
        res.status(500).json({ Message: 'Server Issue or Something Went Wrong' });
    }
}

//Get top rated products
const getTopRatedProduct = (req, res) => {
    try {
        let data = "SELECT * FROM `product` WHERE `top_rated`='true'";
        DB.query(data,async (err, resultData) => {
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


//Get top special offer products
const getSpecialOfferProduct = (req, res) => {
    try {
        let data = "SELECT * FROM `product` WHERE `special`='true'";
        DB.query(data,async (err, resultData) => {
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


//Get top Best Seller products
const getBestSellerProduct = (req, res) => {
    try {
        let data = "SELECT * FROM `product` WHERE `best_seller`='true'";
        DB.query(data,async (err, resultData) => {
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


//User favl list;
const getUserFavProduct = (req, res) => {
    try {
        let data = "SELECT * FROM `product` WHERE `user_fav`='true'";
        DB.query(data,async (err, resultData) => {
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
    getAllProduct,
    getProductById,
    getAllVehicle,
    getTopRatedProduct,
    getSpecialOfferProduct,
    getBestSellerProduct,
    getUserFavProduct
}