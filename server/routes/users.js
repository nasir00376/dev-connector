const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => { res.send('users') })

module.exports = Router;