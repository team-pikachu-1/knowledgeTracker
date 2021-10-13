const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');
require('dotenv').config();

// controller import
const userController = require('./controllers/userController');
const sessionController = require('./controllers/sessionController');
const categoryController = require('./controllers/categoryController');
const topicController = require('./controllers/topicController');


const app = express();
const PORT = 3000;

// handle parsing body and url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routers
app.post('/api/signup',
  userController.signup,
  sessionController.createSession,
  (req, res) => {
    return res.status(200).json(res.locals);
  });

app.post('/api/login', 
  userController.verifyUser,  
  sessionController.createSession,
  // userController.generateData,
  (req, res) => {
    // console.log('res.locals /api/login: ', res.locals);
    return res.status(200).json(res.locals);
  });

app.post('/api/categories', 
  categoryController.createCategory,
  (req, res) => {
    return res.status(200).json(res.locals);
  });

// app.get('/api/topics',
//   topicController.getAllTopics,
//   (req, res) => {
//     return res.status(200).json(res.locals);
//   });

app.post('/api/topics',
  topicController.createTopic,
  (req, res) => {
    return res.status(200).json(res.locals);
  });

app.patch('/api/topics', 
  topicController.updateTopic,
  (req, res) => {
    return res.status(200).json(res.locals);
  });

// app.post('/api/note',
//   (req, res) => {
//     return res.status(200).json(res.locals);
//   });

// serve static pages
app.use(express.static(path.resolve(__dirname, '../client')));

// 404 handler
app.use((req, res) => res.status(404).send('Error 404: Page not found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message.err)
})

// begin listening on port
app.listen(PORT, () => console.log('Listening on port:', PORT));