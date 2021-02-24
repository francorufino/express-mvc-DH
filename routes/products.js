const express = require("express");
const products = require("../products.json");
const model = require("../model/products");

const router = express.Router();

let products1 = [{
    id: 1,
    name: "geladeira",
    price: 800,
    type: "eletronic"
}, {
    id: 2,
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

    products.push(req.body);

    res.render("products", {
        name: "Pagina de produtos",
        types: types
    });
});

router.post('/', function(req, res) {
    const newProduct = req.body;
    newProduct.id = parseInt(Math.random() * 10000);
    products1.push(newProduct);
    console.log(req.body);
    res.render('products', { name: "Cadastro de produtos", types: types });
});

router.get('/lista', function(req, res) {
    res.render('productsList', { products: products1 });
});

router.delete('/:id', function(req, res) {
    console.log("chamando o method delete");
    console.log("detandoo o id: " + req.params.id);

    products1 = products1.filter(function(product) {
        return product.id !== parseInt(req.params.id);
    });

    res.render('productsList', { products: products1 });
});

module.exports = router;