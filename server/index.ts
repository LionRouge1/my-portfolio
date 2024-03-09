// import express from 'express';
const  express = require('express');
const app = express();
// const router = express.Router();
// import projectRoute from './routes/Project';
// import userRoute from './routes/User';
const projectRoute = require('./routes/Project');
const userRoute = require('./routes/User');

app.use(projectRoute);
app.use(userRoute);
app.listen(4000, () => {
  console.log('Application up and runing on port 4000')
});