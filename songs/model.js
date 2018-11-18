const Sequelize = require('sequelize')
const sequelize = require('../db')
const Playlist = require('../playlists/model')

const Songs = sequelize.define('songs', {
 
  title: {
    type: Sequelize.STRING,  
    field: 'title'
  },
  artistName: {
    type: Sequelize.STRING,
    field: 'artist_name'
  },
  albumName: {
    type: Sequelize.STRING,
    field: 'album_name'
  },
  playlistId: {
    type: Sequelize.INTEGER,
    field: 'playlist_id'
  }
})

module.exports = Songs