// Dependencies
const express = require('express');
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(express.urlencoded( {extended: false}));
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB Database
db.connect();

// Routes
require('./router')(app);


app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
})