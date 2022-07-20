const tasks = require('./routes/taksRoute');
const connection = require('./db');
const cors = require('cors');
const express = require('express');

const app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
  };

connection();

app.use(express.json());
app.use(cors(corsOptions));

app.use('/',tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server is Running Succesfully...'));



