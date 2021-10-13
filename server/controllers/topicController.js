const { v4: uuidv4 } = require('uuid');
const { Topics } = require('../db/db.js');
const { Categories } = require('../db/db.js');

const topicController = {};

topicController.getAllTopics = (req, res, next) => {
  Topics.find({})
    .then((topics) => {
      console.log('Retrieving all topics from DB...');
      res.locals.topics = topics;
  })
    .catch(error => {
      return next({
        log: error,
        message: { err: `topicController.getAlltopics ERR: ${error}` },
      })
    });
}

topicController.createTopic = async (req, res, next) => {
  // deconstruct topic name and categoryid from req.body
  const { topicName, categoryId } = req.body;
  const topicId = uuidv4();

  // create new topic
  const newTopic = await Topics.create({
    uuid: topicId,
    title: topicName,
    notes: [],
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: `topicController.create ERR 1: ${error}` },
      })
    });

  // push new category onto user
  const category = await Categories.findOneAndUpdate( 
    { uuid: categoryId }, 
    { $push: {
        topics: newTopic
      }
    },
    { new: true }
  )
    .then(response => {
      res.locals.newTopic = newTopic;
      return next();
    })
    .catch(error => next({
      log: error,
      message: { err: `topicController.create ERR 2: ${error}` },
    }));
};

topicController.updateTopic = (req, res, next) => {
  // deconstruct topicid from req.body
  const { topicId, newNote, } = req.body;
  const noteId = uuidv4();

  // update notes in topic with new note
  Topics.findOneAndUpdate( 
    { uuid: topicId }, 
    { $push: {
        notes: { noteId: noteId, description: newNote }
      }
    },
    { new: true }
  )
    .then(response => {
      res.locals = response;
      return next();
    })
    .catch(error => next({
      log: error,
      message: { err: `topicController.update ERR 1: ${error}` },
    }));
}

topicController.deleteTopic = (req, res, next) => {

}

topicController.addNote = (req, res, next) => {
  const { text } = req.body;

  Topic.notes.push(text);
  Topic.save(done);

  
}

module.exports = topicController;