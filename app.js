const express = require('express');
const app = express();
const axios = require('axios');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/openapi.yaml');


app.use('/api-docs',
 swaggerUi.serve,
 swaggerUi.setup(swaggerDocument)
 );

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(8000, () => {
  console.log("server listening on port 8000!");
});
