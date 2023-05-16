# Node.js API
## This Node.js API provides endpoints for user authentication, product information, and banner offers.
# Endpoint
<b>User Authentication</b>
</br>
</br>
POST ---> /user/login:   Logs in a user with a username and password. Returns a JWT token.
</br>
POST ---> /user/newuser:  Creates a new user with a username and password. Returns a success message.
</br>
</br>
<b>Product Information</b>
</br>
</br>
GET ---> /product/all_product: Returns information about all products.
</br>
GET ---> /product/product_by/:id: Returns information about a specific product by its ID.
</br>
GET ---> /product/all_vehicle: Returns information about all vehicles.
</br>
GET ---> /product/top_rated: Returns information about the top rated products.
</br>
GET ---> /product/special_offer: Returns information about products with special offers.
</br>
GET ---> /product/best_seller: Returns information about the best selling products.
</br>
GET ---> /product/user_fav: Returns information about a user's favorite products.
</br>
</br>
<b>Banner Offers</b>
</br>
</br>
GET ---> /banner/offer_banner: Returns information about banner offers.
</br>
</br>
# Usage
## Clone the repo `https://github.com/Ramraghul/UITOUX_API`
## install the dependencies `npm install`
## Add the Database file in your Database `Database inside the file`
## Start the server `npm start || nodemon`

</br>
</br>
<h2>Technologies Used</h2>
Node.js
</br>
Express.js
</br>
My SQL
</br>
JWT
