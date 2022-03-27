const mongoose = require('mongoose')

let commentSchmea = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rante: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' } 
})



module.exports = mongoose.model('Comment', commentSchmea)