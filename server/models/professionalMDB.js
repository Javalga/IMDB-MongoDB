let mongoose = require('mongoose')

let professionalSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  isRetired: Boolean,
  nationality: String,
  oscarsNumber: Number,
  profession: String
});

module.exports = professionalSchema