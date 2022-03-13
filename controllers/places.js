const router = require("express").Router();
const places = require("../models/places.js");

// get places
router.get('/', (req, res) => {res.render('places/index', { places })})

//POST
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
  
})

// get new 
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  res.send('place details');
});

router.put('/:id', (req, res) => {
  res.send('update place');
});

router.get('/:id/edit', (req, res) => {
  res.send('Edit an existing place');
});

router.delete('/:id', (req, res) => {
  res.send("Delete a particular place");
});

router.post('/:id/rant', (req, res) => {
  res.send('Create a rant');
});

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('Delete');
});


module.exports = router