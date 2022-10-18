const express = require('express')
const router = express.Router()
const dataController = require('./dataController')
const viewController = require('./viewController')

//INDEX - GET
router.get ('/', dataController.index, viewController.index)

//NEW - GET (gets the form for Creating new entry)
router.get ('/new', viewController.newView) //does not require data controller because we are only serving the form to create a new log

//DESTROY - DELETE
router.delete ('/:id', dataController.delete, viewController.redirectHome)

//UPDATE - PUT
router.put ('/:id', dataController.update, viewController.redirectShow)

//CREATE - POST
router.post ('/', dataController.create, viewController.redirectShow)

//EDIT - GET (gets the form for Updating new entry)
router.get ('/:id/edit', dataController.show, viewController.editView)

//SHOW - GET
router.get ('/:id', dataController.show, viewController.show)

module.exports = router