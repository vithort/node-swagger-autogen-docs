const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Vithor Carvalho',
      },
      servers: ['http://localhost:5000'],
    },
  },
  // ['./routes/*.js']
  apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/customers', (req, res) => {
  res.send('Customer results!');
});

/**
 * @swagger
 * /customer:
 *  put:
 *    description: Use to update a customer
 *    responses:
 *      '201':
 *        description: A successful response
 */
app.put('/customer', (req, res) => {
  res.send('Customer update successfully!');
});

/**
 * @swagger
 * /:
 *  get:
 *    description: Welcome Page
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/', (req, res) => {
  res.send('Welcome Page!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
