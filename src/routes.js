const express = require("express");
const User = require('./controllers/user.controllers');

const routes = express.Router();

routes.get('/home', User.index);
routes.post('/post', User.create);
routes.put('/update/:_id', User.update);
routes.delete('/delete/:_id', User.delete);
module.exports = routes;