'use strict'

const config = require('../../../config/config')
const categoryServices = require('../../services/category')
const ObjectId = require('mongoose').Types.ObjectId

const isValidObjectId = (id) => {
  if (ObjectId.isValid(id)) {
    if (String(new ObjectId(id)) === id) return true
    return false
  }
  return false
}

module.exports = {
  createCategory: async function (ctx) {
    const { data: categoryData } = ctx.request.body
    if (!categoryData) {
      throw new Error('Cannot create a category without data')
    }
    if (!categoryData.name || !categoryData.description) {
      throw new Error('Missing arguments')
    }
    const response = await categoryServices.createCategory(categoryData)
    ctx.body = response.body
    ctx.status = response.status
  },
  getAllCategories: async function (ctx) {
    const response = await categoryServices.getAllCategories()
    ctx.body = response.body
    ctx.status = response.status
  },
  getCategoryById: async function (ctx) {
    const { id: categoryId } = ctx.params
    if (!isValidObjectId(categoryId)) {
      throw new Error('Category cannot be found without Id or invalid Id')
    }
    const response = await categoryServices.getCategoryById(categoryId)
    ctx.body = response.body
    ctx.status = response.status
  },
  updateCategoryById: async function (ctx) {
    const { id: categoryId } = ctx.params
    const { data: categoryData } = ctx.request.body
    if (!isValidObjectId(categoryId)) {
      throw new Error('Category cannot be updated without Id or invalid Id')
    }
    if (!categoryData) {
      throw new Error('Category cannot be updated without data')
    }
    const response = await categoryServices.updateCategoryById(
      categoryId,
      categoryData
    )
    ctx.body = response.body
    ctx.status = response.status
  },
  deleteCategoryById: async function (ctx) {
    const { id: categoryId } = ctx.params
    if (!isValidObjectId(categoryId)) {
      throw new Error('Category cannot be deleted without Id or invalid Id')
    }
    const response = await categoryServices.deleteCategoryById(categoryId)
    ctx.body = response.body
    ctx.status = response.status
  },
  deleteAllCategories: async function (ctx) {
    const { admin, secret } = ctx.request.query
    if (!admin || !secret) {
      throw new Error('Cannot delete categories without credentials')
    }
    if (admin !== config.ADMIN || secret !== config.SECRET) {
      throw new Error('Invalids Credential')
    }
    const response = await categoryServices.deleteAllCategories()
    ctx.body = response.body
    ctx.status = response.status
  },
}
