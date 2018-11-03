const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/dev-connector`);
        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.log('Database connection failed');
    }
}

module.exports = connectDB;