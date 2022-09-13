// const command = require('./src/js/command');

// command.run.generateLocation();
// command.run.generateAvatarForLocation();
// command.run.generateLocation();

require('dotenv').config(); // to read the env file
const express = require("express");
const app = express();
const routes = require('./src/routes');

// app.use('/api/v1', routes);

app.use('/api/v1/', routes);

// home endpoint
app.get("/", (req, res) => { 
  return res.json({
    status: 200,
    data: "Bali" 
  })
});

app.listen(process.env.HTTP_PORT, () =>{
  console.log(`success! listening on port ${process.env.HTTP_PORT}`);
});
