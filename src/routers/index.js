const router = require('express')();

router.get('/', (req, res, next) => {
  try {
    res.status(200).json({ message: 'successfully connected' });
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})


module.exports = router;