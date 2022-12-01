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
router.get('/cards', crudController.getAllCards)

//Create card
router.post('/card', crudController.createCard)

//Get one card by ID
router.get('/card/:id', crudController.getCardById)

//Put one card by ID
router.put('/card/:id', crudController.updateCardById)

//Delete one card by ID
router.delete('/card/:id', crudController.deleteCardById)

//Delete all cards from database
router.delete('/cards', crudController.deleteAllCards)

module.exports = router
