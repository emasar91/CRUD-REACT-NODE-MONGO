'use strict'

const config = require('../../../config/config')
const crudServices = require('../../services/crud')
const ObjectId = require('mongoose').Types.ObjectId

const isValidObjectId = (id) => {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true
    return false
  }
  return false
}

module.exports = {
  createCard: async function (ctx) {
    const { data: cardData } = ctx.request.body
    if (!cardData) {
      throw new Error('Cannot create a card without data')
    }
    if (!cardData.name || !cardData.description || !cardData.category) {
      throw new Error('Missing arguments')
    }
    if (!isValidObjectId(cardData.category)) {
      throw new Error(
        'Card cannot be created without category or an invalid category'
      )
    }
    const response = await crudServices.createCard(cardData)
    ctx.body = response.body
    ctx.status = response.status
  },
  getAllCards: async function (ctx) {
    const response = await crudServices.getAllCards()
    ctx.body = response.body
    ctx.status = response.status
  },
  getCardById: async function (ctx) {
    const { id: cardId } = ctx.params
    if (!isValidObjectId(cardId)) {
      throw new Error('Card cannot be found without Id or invalid Id')
    }
    const response = await crudServices.getCardById(cardId)
    ctx.body = response.body
    ctx.status = response.status
  },
  updateCardById: async function (ctx) {
    const { id: cardId } = ctx.params
    const { data: cardData } = ctx.request.body
    if (!isValidObjectId(cardId)) {
      throw new Error('Card cannot be updated without Id or invalid Id')
    }
    if (!cardData) {
      throw new Error('Card cannot be updated without data')
    }
    const response = await crudServices.updateCardById(cardId, cardData)
    ctx.body = response.body
    ctx.status = response.status
  },
  deleteCardById: async function (ctx) {
    const { id: cardId } = ctx.params
    if (!isValidObjectId(cardId)) {
      throw new Error('Card cannot be deleted without Id or invalid Id')
    }
    const response = await crudServices.deleteCardById(cardId)
    ctx.body = response.body
    ctx.status = response.status
  },
  deleteAllCards: async function (ctx) {
    const { admin, secret } = ctx.request.query
    if (!admin || !secret) {
      throw new Error('Cannot delete cards without credentials')
    }
    if (admin !== config.ADMIN || secret !== config.SECRET) {
      throw new Error('Invalids Credential')
    }
    const response = await crudServices.deleteAllCards()
    ctx.body = response.body
    ctx.status = response.status
  },
}
