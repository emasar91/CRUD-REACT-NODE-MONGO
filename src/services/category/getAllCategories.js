'use strict'

const Category = require('../../models/Category')

module.exports = async function getAllCategories() {
  const categories = await Category.find().lean().exec()
  return {
    body: categories,
    status: 200,
  }
}
