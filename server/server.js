const express = require('express');
const connectDB = require('./config/database');
const { users } = require('./routes');

const app = express();

// Connect database
connectDB();

// Middlewares
app.use(express.json());
app.use('/api/v1/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))