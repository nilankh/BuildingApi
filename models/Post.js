const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{ 
        type: String,
        required: true
    
    },
    description:{
        type: String,
        required: true
    }, 
    date:{
        type: Date.now,
        default: Date.now
    } 
});

module.exports = mongoose.model('Posts', PostSchema);