require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, () => {
    console.log('DB Connected!')
})

mongoose.connection.on('error', (err) => {
    console.log('Connection failed!', {err})
})

const routes = require('./routes/index');
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running!')
})