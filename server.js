//**
//Module: anther thing of code that we can reference from other things of code

//The benefits of modules are similar to the benefits of functions
//**

const express = require('express');//import a module (from npm) -->node modules folder
const routes = require('./routes');//import a module(locally)-->dot means dont' go into node modules

//Create our server
const server = express();

//Routes(/*my express app)
routes(server);

//Start server
server.listen(4000, function () {
  console.log('yeet');
});