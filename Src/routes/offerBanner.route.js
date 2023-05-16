//Reaquired;
const express = require("express");
const router = express.Router();


//Import Controller
const {getOfferBanner} = require("../controller/offerBanner.controller");


//API call mentioned;
router.route("/offer_banner").get(getOfferBanner);//Get offer Banners;




//Export the route;
module.exports = router;
