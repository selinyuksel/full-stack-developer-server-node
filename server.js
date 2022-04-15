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
import cors from 'cors';
import userController   from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';

const DB_CONNECTION_STRING = "mongodb+srv://sywebdev:josesywd22frick@cluster0.c82fr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
userController(app);
tuitController(app);
app.listen(process.env.PORT || 4000);