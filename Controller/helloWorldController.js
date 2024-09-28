const express = require('express');
const router = express.Router();
const helloWorldService = require('../Service/helloWorldService');

/**
 * @swagger
 * /hello:
 *   post:
 *     summary: Returns a simple "hello world" response
 *     description: A simple endpoint to demonstrate Swagger with Node.js.
 *     responses:
 *       200:
 *         description: A string response of "hello world"
 */

// Define a POST route
router.post('/hello', (req, res) => {
    const message = helloWorldService.getHelloWorld();
    res.send(message);
});

module.exports = router;