//@ts-check
var express = require("express")
var router = express.Router()

const Trajet = require("../models/trajets") // Require le modèle trajets

router.get('/:departure/:arrival/:date', (req, res) => {
    Trajet.find({departure :{$regex : new RegExp(req.params.departure, 'i')}, arrival :{$regex : new RegExp(req.params.arrival, 'i') }, date: req.params.date}).then(data => {
        if(data.length !==0) {
            res.json({result: true, searchedTrip: data})
        } else {
            res.json({result: false, error: "Trip not found"})
        }
    })
})

module.exports = router