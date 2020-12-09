const express = require('express');
const dotenv = require('dotenv'); // allows to create global varialbes
const colors = require('colors'); //extra
const morgan = require('morgan');

const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});

connectDB();


//bring the file in to 
const transactions =require('./routes/transactions');

const app = express();
app.use(express.json()); //allows the body parser

// app.get('/', (req, res) => res.send('<h1>Test out the backend!</h1>'));
//mount the route:
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

