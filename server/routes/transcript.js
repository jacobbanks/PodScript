const express = require('express');
const fileController = require('../FileController');
const router = express.Router();

router.get('/', fileController.readFile,
  (req, res) => {
    console.log('readFile', res.locals.transript);
    return res.status(200).json({ transript: res.locals.transcript });
  });

module.exports = router;
