const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce')
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((err) => {
        console.log('Error connecting to the database', err);
    });
