'use strict'

const Card = require('../../models/Card')

module.exports = async function getAllCards() {
  const cards = await Card.find().lean().exec()
  return {
    body: cards,
    status: 200,
  }
}
