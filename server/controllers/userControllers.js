const { v4: uuidv4 } = require('uuid');
const { Users } = require('../db/db.js');

const userController = {};

userController.signup = (req, res, next) => {
  console.log('do we enter this controller');
  // declaring new user test params to insert into db
  const testUsername = 'testuser2';
  const testPassword = 'testpassword2';
  const testEmail = 'testemail2';
  const testUserId = uuidv4();

  // make db query to create new user
  Users.create({
    uuid: testUserId,
    username: testUsername, 
    password: testPassword,
    email: testEmail
  })
    .then(response => {
      console.log('Added new User to the DB: ', response);
      return next()
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: ` userController.signup ERR: ${error}` },
      })
    })

};

module.exports = userController;