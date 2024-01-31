var express = require("express")
var router = express.Router()

const Cart = require('../models/cart')

router.post('/', (req, res) => {
    const newCart = new Cart({
        departure: req.body.departure, 
        arrival: req.body.arrival, 
        date : req.body.date, 
        price: req.body.price})

    newCart.save().then(() => res.json({result: true}))
})

router.delete('/', (req, res) => {
    res.send(req.body.data)
})
module.exports = router