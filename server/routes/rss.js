const express = require('express');
const fileController = require('../FileController');
const router = express.Router();

router.post('/', fileController.rssParse,
  (req, res) => {
    console.log('parsedrss', res.locals.parsedRSS);
    return res.status(200).json({ parsedRSS: res.locals.parsedRSS });
  });

module.exports = router;
