const express = require('express');
const dotenv = require('dotenv'); // allows to create global varialbes
const colors = require('colors'); //extra
const morgan = require('morgan');

dotenv.config({path: './config/config.env'});
const app = express();

app.get('/', (req, res) => res.send('<h1>Test out the backend!</h1>'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

