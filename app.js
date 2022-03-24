const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  try {
    res.status(200).json({ message: 'successfully connected' });
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})

app.listen(3001, () => {
  console.log('the server start listening at port 3001')
})
