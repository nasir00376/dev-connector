const Debug = require('debug');
const mongoose = require('mongoose');

const debug = Debug('Database');

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://localhost/dev-connector`);
        debug(`MongoDB connected successfully`);
    } catch (error) {
        debug('Database connection failed');
    }
}

module.exports = connectDB;