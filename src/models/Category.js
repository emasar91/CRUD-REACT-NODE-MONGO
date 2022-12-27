'use strict'

const mongoose = require('mongoose')
/**
 * Schema definition
 */
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'categories',
    timestamps: true,
  }
)

const Card = mongoose.model('category', CategorySchema)

module.exports = Card
