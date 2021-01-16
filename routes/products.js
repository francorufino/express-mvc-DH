const express = require("express");
const products = require("../products.json");
const router = express.Router();

router.get("/", function(req, res) {
    res.render("products", {
        title: "pagina de produtos",
        products: products
    });
});

module.exports = router;