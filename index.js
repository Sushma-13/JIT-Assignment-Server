const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//import routes
const postRoutes = require('./posts-routes');

//app level middleware
app.use(cors());
app.use(bodyParser.json());

//use routes
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Post apis");
});

//db connection
mongoose.connect(process.env.DB_CONNECTION_LOCAL, { useNewUrlParser: true }, () => {
    console.log('Connected to DB');
});

app.listen(3000);