const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let casSchema = new Schema({
    id_cas: {
        type: String
    },
    cas_zone_nom: {
        type: String
    },
    cas_date_maj: {
        type: String
    }
}, {
    collection: 'ListCas'
})

module.exports = mongoose.model('Cas', casSchema)