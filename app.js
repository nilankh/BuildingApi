const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 8000;

// parse requests of content type
app.use(bodyParser.urlencoded({extended: true}));
// parse request of content-type
app.use(bodyParser.json());


const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

// ROutes
app.get('/', (req, res) => {
    res.send('We are on home');
})

// Dbconfig
const db = require('./config/mongoose');





// how do we start listening to the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server started on port ${port}`);
})