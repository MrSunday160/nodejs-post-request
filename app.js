const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

const directoryName = path.basename(__dirname);
// const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use(`/${directoryName}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const controllersPath = path.join(__dirname, 'Controller');
fs.readdirSync(controllersPath).forEach((file) => {

    if(file.endsWith('Controller.js')){
        const router = require(path.join(controllersPath, file));
        app.use('/', router);
    }

})

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/${directoryName}`);
});
