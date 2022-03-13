const { append } = require('express/lib/response')

const router = require('express').Router()

// get places

router.get('/', (req, res) => {
        let places = [{
                name: 'H-Thai-ML',
                city: 'Seattle',
                state: 'WA',
                cuisines: 'Thai, Pan-Asian',
                pic: '/images/jason-leung-poI7DelFiVA-unsplash.jpg'
              }, {
                name: 'Coding Cat Cafe',
                city: 'Phoenix',
                state: 'AZ',
                cuisines: 'Coffee, Bakery',
                pic: '/images/piotr-szulawski-DCmUhk54F6M-unsplash.jpg'
              }]
        res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router