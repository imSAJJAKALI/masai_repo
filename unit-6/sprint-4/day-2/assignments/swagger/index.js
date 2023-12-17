const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const app = express()

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'ToDo API',
      version: '1.0.0',
      description: 'API documentation for the ToDo application.'
    },
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))



const PORT = 8000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});