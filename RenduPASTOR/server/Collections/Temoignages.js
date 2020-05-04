const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let temoignagesSchema = new Schema({
    id_temoignage: {
        type: String
    }
},{
    collection: 'ListTemoignages'
})

module.exports = mongoose.model('Temoignage', temoignagesSchema)
