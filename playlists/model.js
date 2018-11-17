const Sequelize = require('sequelize')
const sequelize = require('../db')

const Playlist = sequelize.define('playlist', {
  id: {
    type: Sequelize.SERIAL,
    field: 'id',
    allowNull: false
  },
  playlistName: {
    type: Sequelize.STRING,
    field: 'playlist_name'
  }
})

module.exports = Playlist