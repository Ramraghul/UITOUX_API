//Require_modules;
require('dotenv');
const express = require('express');
const cors = require('cors');
const App = express();
const User = require('./Src/routes/Auth.route');
const Product = require('./Src/routes/Product.route');
const Banner = require('./Src/routes/offerBanner.route');
const multer = require("multer");
const path = require("path");


//multer config;
const storage = multer.diskStorage({
  destination: "./Src/asset",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });



//Express_middleware;
App.use(express.json());
App.use(cors('*'));



//Query params mentioned;
App.use('/user',User);//All API call user use the first query after add the Auth.routes query's;
App.use('/product',Product)
App.use('/banner',Banner)



//Post_config or port_listern;
const Port = 9000
App.listen(Port, () => {
    console.log("Server listening on" +" "+ Port);
})