var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(knexConfig)

module.exports = {
  getMarkers,
  addMarker
}

function getMarkers() {
  return knex('markers')
}

function addMarker (lat, lng) {
  return knex('markers').insert({lat: `${lat}`, lng: `${lng}`})
}
