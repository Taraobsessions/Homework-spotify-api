const { Router } = require('express')
const Playlist = require('./model')
const Songs = require('../songs/model')

const router = new Router()

router.post('/playlists', (req, res, next) => {
  Playlist
  .create(req.body)
  .then(playlist => {
    if(playlist === null) {
      return res.status(404).send({
        message: 'Playlist needs a name'
      })
    }
    return res.status(201).send(playlist)
  })
  .catch(error => next(error))
})

router.get('/playlists', (req, res, next) => {
  Playlist
  .findAll()
  .then(playlists => {
    if(playlists.length === 0) {
      return res.status(404).send({
        message: 'You don\'t have any playlists'
      })
    }
    return res.status(201).send(playlists)
  })
  .catch(error => next(error))
})

router.get('/playlists/:id', (req, res, next) => {
  Playlist
  .findById(req.params.id, {include: [Songs]})
  .then(playlists => {
    if(playlists === null) {
      return res.status(404).send({
        message: 'You don\'t have any playlists'
      })
    }
    res.send({ playlists })
  })
  .catch(error => next(error))
})

router.delete('/playlists/:id', (req, res, next) => {
  Playlist
  .findById(req.params.id)
  .then( playlist => {
    if(!playlist)
    return res.status(404).send({
      message: 'Playlist does not exist'
    })
    return playlist.destroy()
    .then(() => res.send ({
      message: 'Playlist was deleted'
    }))
  })
  .catch(error => next(error))
})

module.exports = router  