'use-strict'

const Category = require('../../models/Category')

module.exports = async function getCategoryById(_id) {
  const category = await Category.findOne({ _id }).lean().exec()

  if (category) {
    return {
      body: category,
      status: 200,
    }
  }
  return {
    status: 404,
  }
}
