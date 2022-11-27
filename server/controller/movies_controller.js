require('../database')
const Photo = require('../model/photos')

const getPhotos = (req, res) => {
  Photo.find({ user: req.query.user })
    .then(data => { console.log(data); res.send(data) })
    .catch(err => console.log(err))
}

const postPhoto = (req, res) => {
  const data = new Photo({
    user: req.body.user,
    url: req.body.url,
    title: req.body.title,
    description: req.body.description,
  })
  Photo.create(data)
    .then(data => {
      console.log('Documento creado.');
      console.log(data)
      res.send(data)
    })
    .catch(err => console.log(err))
}

const putPhoto = (req, res) => {
  Photo.findOneAndUpdate({ title: req.body.title }, { description: req.body.description })
    .then(data => { console.log(data); res.send(data) })
    .catch(err => console.log(err))
}

const delPhoto = (req, res) => {
  if (req.body.title) {
    Photo.findOneAndDelete({ user: req.body.user, title: req.body.title })
      .then(items => {
        console.log("Succesfully deleted");
        console.log(items);
        res.send(items)
      })
      .catch(err => console.log(err))
  } else {
    Photo.deleteMany({ user: req.body.user })
      .then(items => {
        console.log('Successfully deleted');
        console.log(items);
        res.send(items)
      })
      .catch(err => console.log(err))
  }

}

module.exports = { getPhotos, postPhoto, putPhoto, delPhoto }