var express = require('express');
var router = express.Router();
var orderSch = require('../schemas/order');
var cors = require('cors');

router.use(cors());

const mongoose = require("mongoose");
const Order = mongoose.model("order", orderSch);

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})
router.use(express.urlencoded());
router.use(express.json());

router.get('/', function(req, res){
    Order.find({}, function(err, orders){
        if(err) return res.status(orders)
    });
});

router.post('/', function (req, res) {
    Order.create(req.body, function(err, order){
        if(err) return res.status(500).send(err);
        res.send(order);
    });
});

module.exports = router;
