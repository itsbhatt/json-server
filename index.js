const express = require('express');
const serverless = require('serverless-http');

const routes = require('./routes');
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

if (process.env.ENVIRONMENT === 'production') {
  exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
