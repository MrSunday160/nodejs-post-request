const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Node.js API',
        description: 'A simple API to demonstrate Swagger with Node.js',
    },
    host: 'localhost:3000',
    basePath: '/',
};

const outputFile = './swagger.json'; // Output file for the generated Swagger spec
const endpointsFiles = ['./app.js', './Controller/*.js']; // Files that contain your API endpoints

swaggerAutogen(outputFile, endpointsFiles, doc)
    .then(() => {
        console.log('Swagger documentation generated successfully');
        require('./app.js'); // Start your app after the documentation is generated
    })
    .catch(err => {
        console.error('Error generating Swagger documentation:', err);
    });