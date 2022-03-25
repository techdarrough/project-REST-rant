const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {res.render("places/index", { places });
  })
    .catch((err) => {
      console.log(`Error at root route:${err}`);
      res.render("error404")
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("/places/new", { message });
      } else {
        res.render("error404");
      }
      
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});
//Show route
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log(`Error on Show route ${err}`);
      res.status("404").render("error404");
    });
});

router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});
//Delete
router.delete("/:id", (req, res) => {
  res.send("DELETE /places/:id stub");
});
// router.delete(":id", (req, res) => {
//   db.Place.findByIdAndRemove(req.params.id)
//     .then(res.redirect("/places"))
//     .catch((err) => console.log(err));
// });
//Edit
router.get("/:id/edit", (req, res) => {
  res.send("GET edit form stub");
});
// router.get("/places/:id/edit", (req, res) => {
//   db.Place.findByIdAndUpdate(req.params.id)
//     .exec()
//     .then((place) => res.render("places/:id"));
// });

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
