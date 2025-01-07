const express = require('express');
const router = express.Router();

// Route mẫu
router.get('/', (req, res) => {
  res.send('User route is working!');
});

module.exports = router;
