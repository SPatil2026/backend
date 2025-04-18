const mongoose = require('mongoose');
const { DB_NAME } = require('../constants.js');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB