const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    pokemonName: {type: String, require: true},
    pokemonType: {type: String, require: true},
    canItEvolve: Boolean,
    isItCute: Boolean,
    isItCool: Boolean,
    imageLink: {type: String, require: true}
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon