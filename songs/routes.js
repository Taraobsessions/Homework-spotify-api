const { Router } = require('express')
const Songs = require('./model')
const playlists = require('../playlists/model')

const router = new Router()

router.post('/playlists/:id/songs', (req, res, next) => {
  Songs
  .create(req.body)
  .then(song => {
    if(song === null) {
      return res.status(204).send({
        message: 'There are no songs here'
      })
    }
    return res.status(201).send(song)
  })
  .catch(error => next(error))
})

router.get('/songs', (req, res, next) => {
  Songs
  .findAll()
  .then(songs => {
    if(songs.length === 0) {
      return res.status(404).send({
        message: 'You don\'t have any songs'
      })
    }
    return res.status(201).send(songs)
  })
  .catch(error => next(error))
})
module.exports = router