'use strict'

const Card = require('../../models/Card')

module.exports = async function createCard(data) {
  const response = await Card.create(data)

  return {
    body: {
      status: 'created',
      pokemon: { name: response.name, id: response._id },
    },
    status: 201,
  }
}
