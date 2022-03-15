// Mods and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require("method-override")

//expres settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine() );
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// controllers and routes
app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('*', (req, res) => {
    res.render('error404')
});

app.listen(process.env.PORT);
console.log(`Listening on port ${process.env.PORT}`)