let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let casSchema = require('../Collections/Cas');

router.route('/').get((req, res) => {
    casSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/get-cas/:cas_zone_nom').get((req, res) => {
    casSchema.findById(req.params.cas_zone_nom, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;