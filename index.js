require('dotenv').config(); // to read the env file
const express = require("express");
const app = express();
const routes = require('./routes');

app.use(express.json());

// for getting the data
app.use('/api/v1/', routes);

// check the connection and port
app.listen(process.env.HTTP_PORT, () => {console.log(`It's running on ${process.env.HTTP_PORT}`)});
