let mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jaalga:dnfISz8EU5bZiJB9@cluster0.sv2p0ua.mongodb.net/IMDB",
  { useNewUrlParser: false, useUnifiedTopology: false })
  .then(db => { console.log(`Database connected on ${db.connection.host}`) })
  .catch(err => console.log(err))

module.exports = mongoose;