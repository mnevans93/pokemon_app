require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const db = require('./models/db')
const port = 3151

app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')

db.once('open', () => {
    console.log('Connected to MongoDB Atlas')
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokedex', require('./controllers/routeController.js'))

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})