const Sequelize = require('sequelize')
const sequelize = require('../db')
const Songs = require('../songs/model')


const Playlist = sequelize.define('playlist', {

  playlistName: {
    type: Sequelize.STRING,
    field: 'playlist_name'
  }
})

Playlist.hasMany(Songs, {foreignKey: 'playlistId'})
module.exports = Playlist