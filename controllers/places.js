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
//show route multi condintional ternary operator expression
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  console.log(id);
  isNaN(id)?res.status(404).render('error404'): //first condintional
 (!places[id])?res.status(404).render('error404'): //second contional
  res.render("places/show", { place: places[id], id }); //else value
});

router.put('/:id', (req, res) => {
  res.send('update place');
});

router.get('/:id/edit', (req, res) => {
  res.send('Edit an existing place');
});

router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    res.redirect("/places");
  }
});

router.post('/:id/rant', (req, res) => {
  res.send('Create a rant');
});

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('Delete');
});


module.exports = router