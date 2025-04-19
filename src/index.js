require('dotenv').config({path: './.env'})
const app = require('./app.js');
const connectDB = require('./db/index.js')


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error('MongoDB connection failed !!! :', error);
});































/*
const express = require('express');
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log('Error:', error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()
*/