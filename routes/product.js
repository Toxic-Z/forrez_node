var express = require('express');
var router = express.Router();
var productSch = require('../schemas/product');
var cors = require('cors');

router.use(cors());

const mongoose = require("mongoose");
const Product = mongoose.model("product", productSch);

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.use(express.urlencoded());
router.use(express.json());

router.get('/', function(req, res){
    Product.find({}, function(err, products){
        if(err) return res.status(500).send(err);
        res.status(200).send(products)
    });
});

router.post('/', function (req, res) {
    Product.create(req.body, function(err, product){
        if(err) return res.status(500).send(err);
        res.send(product);
    });
});

module.exports = router;
