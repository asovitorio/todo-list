const express = require('express')
const router = express.Router()

//TODO Routes
const todoService = require('../api/todo/todoService')
todoService.register(router,'/todos')

module.exports = router
