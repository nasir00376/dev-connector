const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))