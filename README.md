In order to display our swager document it is necessary to add  

```
npm install swagger-ui-express
```

And then in the app.js add the follow code lines  

```
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

The above lines will let add a swagger document in json format  
If you want to add a yaml file you will need to add:  

```
npm install --save yamljs
```
And then in the app.js add the follow code lines  
```
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Reference:  
[Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express#load-swagger-from-yaml-file).


### How to run  
Run 
```
npm install
```

In the terminal run the follow command
```
node app.js
```