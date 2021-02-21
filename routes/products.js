const express = require("express");
const products = require("../products.json");
const model = require("../model/products");

const router = express.Router();

const products1 = [{
    name: "geladeira",
    price: 800,
    type: "eletronic"
}, {
    name: "arroz",
    price: 30,
    type: "food"
}];



const types = [{
        id: "eletronic",
        label: "Eletronico"
    },
    {
        id: "food",
        label: "Alimenticio"
    },
    {
        id: "drugs",
        label: "Farmaceutico"
    }

];
router.get("/", function(req, res) {

    res.render("products", {
        name: "Pagina de produtos",
        types: types
    });
});

router.post('/', function(req, res) {
    console.log(req.body);
    res.render('products', { name: "Cadastro de produtos", types: types });
});

router.get('/lista', function(req, res) {
    res.render('productsList', { products: products1 });
});

module.exports = router;