'use strict'

const Category = require('../../models/Category')

module.exports = async function createCategory(data) {
  const duplicateCategory = await Category.findOne({ name: data.name })
    .lean()
    .exec()

  if (duplicateCategory) {
    throw new Error('the category already exist')
  }

  const response = await Category.create(data)

  return {
    body: {
      status: 'created',
      category: { name: response.name, id: response._id },
    },
    status: 201,
  }
}
