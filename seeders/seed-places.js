const db = require("../models");

db.Place.create([
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/jason-leung-poI7DelFiVA-unsplash.jpg",
    founded: 1987,
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/piotr-szulawski-DCmUhk54F6M-unsplash.jpg",
    founded: 2003,
  },
])
  .then(() => {
    console.log("Success");
    process.exit();
  })
  .catch((err) => {
    console.log(`Fail sauce ${err}`);
    process.exit();
  });
