const RESOURCE_PATH = '/pokedex'

const viewController = {
    //INDEX
    index (req, res, next) {
        res.render('pokedex/Index', res.locals.data)
    },

    //NEW
    newView (req, res, next) {
        res.render('pokedex/New')
    },

    //EDIT
    editView (req, res, next) {
        res.render('pokedex/Edit', res.locals.data)
    },

    //SHOW
    show (req, res, next) {
        res.render('pokedex/Show', res.locals.data)
    },

    //REDIRECT USER TO HOME PAGE
    redirectHome (req, res, next) {
        res.redirect(RESOURCE_PATH)
    },

    //REDIRECT USER TO SHOW PAGE
    redirectShow (req, res, next) {
        res.redirect(`${RESOURCE_PATH}/${res.locals.data.pokemon._id}`)
    }
}

module.exports = viewController