const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    uuid:'string',
    name:'string',
    email:'string'
},{
    timestamps: true
});

const user = mongoose.model('user', schema);

module.exports = user;