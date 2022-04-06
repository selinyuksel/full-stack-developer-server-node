// //const express = require('express'); ----old version
// import express from 'express'; //possible since Node v12
// import helloController from "./controllers/hello-controller";
//
// const app = express();
//
// helloController(app);
// //app.get('/hello', (req, res) => {res.send('Life is good!')})
// //app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
//
// app.listen(4000);

import express from 'express';
import userController   from "./controllers/user-controller.js";

const app = express();
app.use(express.json());
userController(app);
app.listen(4000);