'use strict'

const Category = require('../../models/Category')

module.exports = async function updateCategoryById(_id, data) {
  const category = await Category.findOne({ _id }).lean().exec()

  if (category) {
    await Category.updateOne({ _id }, { $set: data }).lean()
    return {
      status: 200,
      body: { status: 'updated' },
    }
  }
  throw new Error('the category does not exist')
}
