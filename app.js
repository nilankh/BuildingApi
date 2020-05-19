const express = require('express');

const app = express();
const port = 8000;


// Dbconfig
const db = require('./config/mongoose');


// ROutes
app.get('/', (req, res) => {
    res.send('We are on Home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});


// how do we start listening to the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})