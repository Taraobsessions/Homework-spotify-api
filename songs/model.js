const Sequelize = require('sequelize')
const sequelize = require('../db')
const Playlist = require('../playlists/model')

const Songs = sequelize.define('songs', {
  id: {
    type: Sequelize.SERIAL,
    field: 'id',
    allowNull: false
  },
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

Songs.belongsTo(Playlist)
module.exports = Songs