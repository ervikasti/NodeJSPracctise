const express = require('express');
const server = express();
const port = 8083;
const exchangeRoute = require('./Routes/ExchangeRoute');

server.use('/exchange', exchangeRoute);

server.listen(port, () => {
  console.log(`Exchange service listening at http://localhost:${port}`);
});