'use strict'

/**
 * Init routes
 */
const Router = require('koa-router')
const router = new Router()

router.prefix('/v1')

const crudController = require('../api')

// Add here all the controllers you have in your app

// Get all cards
router.get('/cards', crudController.card.getAllCards)

//Create card
router.post('/card', crudController.card.createCard)

//Get one card by ID
router.get('/card/:id', crudController.card.getCardById)

//Put one card by ID
router.put('/card/:id', crudController.card.updateCardById)

//Delete one card by ID
router.delete('/card/:id', crudController.card.deleteCardById)

//Delete all cards from database
router.delete('/cards', crudController.card.deleteAllCards)

//Create Category
router.post('/category', crudController.category.createCategory)

//Get All Categories
router.get('/categories', crudController.category.getAllCategories)

//Get one Categories by ID
router.get('/category/:id', crudController.category.getCategoryById)

//Delete one Category by ID
router.delete('/category/:id', crudController.category.deleteCategoryById)

//Delete all Categories
router.delete('/categories', crudController.category.deleteAllCategories)

//update one Category by ID
router.put('/category/:id', crudController.category.updateCategoryById)

module.exports = router
