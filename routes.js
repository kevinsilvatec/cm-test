const express = require('express')
const digitController = require('./src/controllers/digitController');
const scrapingController = require('./src/controllers/scrapingController');
 
const routes = express.Router()

routes.get("/", (req, res) => {
    return res.json({message: "This API is working!"});
});

routes.post('/singleDigit', digitController.calc);

routes.get('/saveQuotes', scrapingController.store);

module.exports = routes;