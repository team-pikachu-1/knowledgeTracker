const { Sessions } = require('../db/db.js');

const sessionController = {};

sessionController.createSession = (req, res, next) => {
  // create new session using user_id as a cookieid
  Sessions.create({ cookieId: res.locals.user_id })
    .then(session => {
      console.log('created session: ', session);
      // create a new cookie that contains cookieId as value
      res.cookie('session_id', session.cookieId, {
        httpOnly: true,
        secure: true,
      });
      return next();
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: `sessionController.createSession ERR: ${error}` },
      });
    });
};

module.exports = sessionController;