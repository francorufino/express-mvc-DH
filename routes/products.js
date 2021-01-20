const express = require("express");
const products = require("../products.json");
const model = require("../model/products");

const router = express.Router();





router.get("/", function(req, res, next) {
    res.render("products", {
        title: "produtos",
        products: model.getProducts()
    });
});

module.exports = router;