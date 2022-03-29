const express = require('express');
const app = express();
const port = 3001;

// initialize the middleware
app.use(express.json());
app.use(express.urlencoded());

// export the REST API endpoint
app.use(require('./routers'));

// start the server
app.listen(port, () => {
  console.log(`the server start listening at port ${port}`);
})