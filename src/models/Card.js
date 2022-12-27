'use strict'

const mongoose = require('mongoose')
/**
 * Schema definition
 */
const CardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'category',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'cards',
    timestamps: true,
  }
)

const Card = mongoose.model('card', CardSchema)

module.exports = Card
