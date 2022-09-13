const express = require('express');
const router = express.Router();
const controller = require('../controller');

// router.get('/', controller.location.generateLocation);

router.get('/', async (req, res) => {
  const data = await controller.neighbourhood.getStructure();
  return res.send({
    status: 200,
    data: data.data[0] 
  });
});

module.exports = router;

