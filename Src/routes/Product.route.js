//Reaquired;
const express = require("express");
const router = express.Router();


//Import Controller
const {getAllProduct,getProductById,getAllVehicle,getTopRatedProduct,getSpecialOfferProduct,getBestSellerProduct,getUserFavProduct} = require("../controller/Product.controller");


//API call mentioned;
router.route("/all_product").get(getAllProduct);//Get All product's;
router.route("/product_by/:id").get(getProductById);//Get product by id;
router.route("/all_vehicle").get(getAllVehicle);//Get all vehicle;
router.route("/top_rated").get(getTopRatedProduct);//Get all TopRatedProduct;
router.route("/special_offer").get(getSpecialOfferProduct);//Get all SpecialOfferProduct;
router.route("/best_seller").get(getBestSellerProduct);//Get all BestSellerProduct;
router.route("/user_fav").get(getUserFavProduct);//Get all UserFavProduct;



//Export the route;
module.exports = router;
