let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let temoignagesSchema = require('../Collections/Temoignages');

router.route('/').get((req, res) => {
    temoignagesSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/get-temoignages/:id_temoignage').get((req, res) => {
    temoignagesSchema.findById(req.params.id_temoignage, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;