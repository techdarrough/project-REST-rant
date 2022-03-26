require('dotenv').config()
const mongoose = require('mongoose');



mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() => console.log(`Connect to ${process.env.MONGO_URI}`))
  .catch((err) => console.log(err));


  module.exports.Place = require('./places');
  module.exports.Comment = require('./comment')