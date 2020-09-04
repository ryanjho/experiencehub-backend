// Dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded( {extended: false}));

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
})