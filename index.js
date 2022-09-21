const express = require('express');
const app = express();
require('./models/dbconfig');
const userRoutes = require('./routes/userController');
const bodyparser = require('body-parser');

app.use(bodyparser.json())

//------------------------routes---------------------------------------

app.use( '/users', userRoutes);

app.listen(5500, () => console.log('server lancer'));