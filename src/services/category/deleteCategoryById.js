'use strict'

const Category = require('../../models/Category')

module.exports = async function deleteCategoryById(_id) {
  const category = await Category.findOne({ _id }).lean().exec()

  if (!category) {
    throw new Error(`Not found category with id "${_id}"`)
  }

  await Category.deleteOne({ _id }).lean().exec()

  return {
    body: { status: 'deleted' },
    status: 200,
  }
}
