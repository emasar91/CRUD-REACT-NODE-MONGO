'use-strict'

const Card = require('../../models/Card')

module.exports = async function getCardById(_id) {
  const card = await Card.findOne({ _id }).lean().exec()
  if (card) {
    return {
      body: card,
      status: 200,
    }
  } else {
    return {
      status: 404,
    }
  }
}
