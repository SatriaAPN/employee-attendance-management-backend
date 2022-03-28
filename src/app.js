const express = require('express');
const app = express();

// initialize the middleware
app.use(express.json());
app.use(express.urlencoded());

// export the REST API endpoint
app.use(require('./routers'));

// start the server
app.listen(3001, () => {
  console.log('the server start listening at port 3001')
})