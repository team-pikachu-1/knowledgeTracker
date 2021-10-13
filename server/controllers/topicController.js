const { v4: uuidv4 } = require('uuid');
const { Topics } = require('../db/db.js');

const topicController = {};

// topicController.getAllTopics = (req, res, next) => {
//   Topics.find({})
//     .then((topics) => {
//       console.log('Retrieving all topics from DB...');
//       res.locals.topics = topics;
//   })
//     .catch(error => {
//       return next({
//         log: error,
//         message: { err: `topicController.getAlltopics ERR: ${error}` },
//       })
//     });
// }

topicController.createTopic = (req, res, next) => {
  const { topicName } = req.body;
  const topicId = uuidv4();

  Topics.create({
    uuid: topicId,
    title: topicName,
    notes: [],
  })
    .then(data => {
      console.log('Added new topic to the DB: ', data);
      res.locals = {
        topicTitle: data.title,
        user_id: data.uuid,
      };
      return next();
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: `topicController.create ERR: ${error}` },
      })
    });
};

topicController.updateTopic = (req, res, next) => {

}

topicController.deleteTopic = (req, res, next) => {

}

topicController.addNote = (req, res, next) => {
  const { text } = req.body;

  Topic.notes.push(text);
  Topic.save(done);

  
}

module.exports = topicController;