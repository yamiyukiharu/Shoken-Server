const mongoose = require('mongoose')

const gymSchema = new mongoose.Schema({
  createdBy: String,
  name: String,
  images: Array,

})

module.exports = mongoose.model('Gyms', gymSchema, 'gyms')