const express = require('express');
const app = express();

// export the REST API endpoint
app.use(require('./routers'));

app.listen(3001, () => {
  console.log('the server start listening at port 3001')
})
