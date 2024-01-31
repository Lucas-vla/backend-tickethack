//@ts-check
var express = require("express")
var router = express.Router()

const Trajet = require("../models/trajets") // Require le modèle trajets

router.get('/', (req, res) => {
    Trajet.find({departure :req.body.departure, arrival : req.body.arrival}).then(data => {
        if(data.length !==0) {
            res.json({result: true, searchedTrip: data})
        } else {
            res.json({result: false, error: "Trip not found"})
        }
})
})

module.exports = router