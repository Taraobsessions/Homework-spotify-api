const express = require('express')
const app = express()
const playlistRouter = require('./playlists/routes')
const songsRouter = require('./songs/routes')
const bodyParser = require('body-parser')
const usersRouter = require('./users/routes')


app
.use(bodyParser.json())
.use(playlistRouter, songsRouter, usersRouter)
.listen(process.env.PORT || 4001, () => console.log('Express API listening on port 4001'))
