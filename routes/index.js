const express = require('express');
const router = express.Router();
const neighbourhood = require('../routes/neighbourhood');

router.use('/neighbourhood', neighbourhood);

module.exports = router;

