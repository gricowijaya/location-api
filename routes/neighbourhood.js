const express = require('express');
const { last } = require('underscore');
const router = express.Router();
const controller = require('../controller');

// location details 
router.get('/details', async (req, res) => {
  try { 
    const { id } = req.body;
    const data = await controller.neighbourhood.getNeighbourhoodDetails(id);

    // check the data
    // console.log(data); 
    
    return res.status(200).json({
      status: "success",
      data: data
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      error: err
    });
  }
});

router.post('/append', async (req, res) => {
  try {
    const file = "./data/neighbourhood.json";
    const { lastIndexToBeRequested } = req.body; 
    const data = await controller.neighbourhood.appendNeighbourhood(file, lastIndexToBeRequested);
    return res.status(200).json({
      status: "success",
      message: `Data has written in the path of ${file}`,
      data: data
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      error: err
    });
  }
});

router.post('/create-new', async (req, res) => {
  try {
    const file = "./data/neighbourhood.json";
    const { lastIndexToBeRequested } = req.body; 
    const data = await controller.neighbourhood.writeNeighbourhood(file, lastIndexToBeRequested);
    return res.status(200).json({
      status: "success",
      message: `Data has written in the path of ${file}`,
      data: data
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      error: err
    });
  }
});

router.get('/all', async (req, res) => {
  try {
    const data = await controller.neighbourhood.getAllNeighbourhood();
    return res.status(200).json({
      status: "success",
      data: data 
    });
  } catch (err) {
    return res.status(500).json({
      status: "failed",
      message: err 
    });
  }
});

module.exports = router;

