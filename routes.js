const express = require('express')
const generateResponse = require('./helpers/generateResponse.js');

const router = express.Router()

router.use('/', (req, res) => {
  const response = generateResponse({
    path: req.path,
    url: req.url,
    query: req.query,
    params: req.params,
    method: req.method,
    body: req.body,
  })

  if(response.error) return res.status(404).send('Not Found!');
  if(response.status) return res.status(response.status).json(response.response || {});

  return res.status(500).send('Something went wrong!');
})

module.exports = router;
