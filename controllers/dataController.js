const Pokemon = require('../models/pokemon')

const checkForError = (err, res) => {
    if (err) {
        res.status(400).send({msg: err.message})
        return true
    } else {return false}
}

const dataController = {
    //INDEX
    index (req, res, next) {
        Pokemon.find({}, (err, foundPokedex) => {
            if (checkForError(err, res) === false) {
                res.locals.data.pokedex = foundPokedex
                next()
            }
        })
    },

    //NEW - doesn't actually connect to DB so nothing needed here

    //DELETE
    delete (req, res, next) {
        Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
            if (checkForError(err, res) === false) {
                res.locals.data.pokemon = deletedPokemon
                next()
            }
        })
    },

    //UPDATE
    update (req, res, next) {
        req.body.canItEvolve = req.body.canItEvolve === 'on'? true : false
        req.body.isItCute = req.body.isItCute === 'on'? true : false
        req.body.isItCool = req.body.isItCool === 'on'? true : false
        Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPokemon) => {
            if (checkForError(err, res) === false) {
                res.locals.data.pokemon = updatedPokemon
                next()
            }
        })
    },

    //CREATE
    create (req, res, next) {
        req.body.canItEvolve = req.body.canItEvolve === 'on'? true : false
        req.body.isItCute = req.body.isItCute === 'on'? true : false
        req.body.isItCool = req.body.isItCool === 'on'? true : false
        Pokemon.create(req.body, (err, createdPokemon) => {
            if (checkForError(err, res) === false) {
                res.locals.data.pokemon = createdPokemon
                next()
            }
        })
    },

    //EDIT - basically the same as show, we're just displaying the
    //       edit form instead. Doesn't need its own DB route
    //SHOW
    show (req, res, next) {
        Pokemon.findById(req.params.id, (err, foundPokemon) => {
            if (checkForError(err, res) === false) {
                res.locals.data.pokemon = foundPokemon
                next()
            }
        })
    }

}

module.exports = dataController