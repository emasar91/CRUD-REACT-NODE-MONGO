'use strict'

const Category = require('../../models/Category')

module.exports = async function deleteAllCategories() {
  try {
    await Category.remove()
    return {
      status: 200,
      body: { status: 'deleted' },
    }
  } catch (e) {
    const error = new Error(`Error ${e}`)
    error.status = 400
    throw error
  }
}
