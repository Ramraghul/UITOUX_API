//Require;
const express = require('express');
const router = express.Router();


//Import Controller
const { userlogin,createNewUsers} = require('../controller/Auth.controller');


//API call mentioned;
router.route('/login').post(userlogin);
router.route('/newuser').post(createNewUsers);



//Export the route;
module.exports = router