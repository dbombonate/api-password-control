const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./server.js', './src/routes/storeRoutes.js',
  './src/routes/docsRoutes.js', './src/routes/departmentsRoutes.js',
  './src/routes/passwordRoutes.js', './src/app.js'];

swaggerAutogen(outputFile, endpointsFiles);
