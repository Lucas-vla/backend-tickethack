var express = require("express")
var router = express.Router()

const Booking = require("../models/booking")


router.post('/', (req, res) => {
    const newBooking = new Booking({
        departure: req.body.departure, 
        arrival: req.body.arrival, 
        date : req.body.date, 
        price: req.body.price})

    newBooking.save()
})

router.get('/', (req, res)=>{
    Booking.find().then(data => {
        if(data.length !==0) {
            res.json({result: true, searchedTrip: data})
        } else {
            res.json({result: false, error: "Trip not found"})
        }
})
})

module.exports = router