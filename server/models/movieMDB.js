let mongoose = require('mongoose')
let Professional = require('./professionalMDB')

let movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    actors: [Professional],
    nacionality: String,
    director: [String],
    scriptwriters: [String],
    writer: String,
    language: String,
    isMCU: Boolean,
    mainCharacterName: String,
    producer: String,
    distributor: String,
    genre: String,
    plataforma: String
});

module.exports = mongoose.model("movie", movieSchema, 'movies')