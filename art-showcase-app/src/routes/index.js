// This file sets up the routes for the art showcase application.

const express = require('express');
const IndexController = require('../controllers/index');

const router = express.Router();
const indexController = new IndexController();

router.get('/', indexController.getArtworks.bind(indexController));

module.exports = router;