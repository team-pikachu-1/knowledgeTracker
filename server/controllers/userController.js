const { v4: uuidv4 } = require('uuid');
const { Users } = require('../db/db.js');

const userController = {};

userController.signup = (req, res, next) => {
  // deconstruct username, password, email and userid from req.body
  console.log("REQ PARAMS IS: ", req.params);
  console.log("req body is: ", req.body);
  const { username, password, email } = req.body;
  const userId = uuidv4();

  // make db query to create new user
  Users.create({
    uuid: userId,
    username: username, 
    password: password,
    email: email
  })
    .then(response => {
      console.log('Added new user to the DB: ', response);
      res.locals = {
        username: response.username,
        user_id: response.uuid,
      };
      return next();
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: `userController.signup ERR: ${error}` },
      })
    })
};

userController.verifyUser = (req, res, next) => {
  // deconstruct username and password from req.params
  const { username, password } = req.params;

  // check to see if username exists in database
  User.findOne({ username })
    .then(user => {
      console.log('user: ', user);
      // check to see if input password matches the password stored in db
      user.comparePassword(password, (error, valid) => {
        // if true, return next() with res.locals to create a new sesion
        if (valid) {
          res.locals = {
            username: user.username,
            user_id: user.uuid,
          };
          return next();
        } 
        // if false, return status 500 user or password is incorrect
        else {
          return res.status(500).send("Username or password is incorrect.");
        }
      })
    })
    .catch(error => {
      console.log('error: ', error);
      return res.status(500).send("Internal server error OR username/password is incorrect.");
    });
};


module.exports = userController;