const mongoose = require('mongoose');


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'knowledgeTracker'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log('Connection to Mongo DB failed: ', err));

const Schema = mongoose.Schema;

// sets a schema for the 'User' collection
const userSchema = new Schema({
  uuid: String,
  username: String,
  password: String,
  email: String,
  categories: String,
  category_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'category' collection
    type: Schema.Types.ObjectId,
    ref: 'category'
  }
});

const categorySchema = new Schema({
  uuid: String,
  title: String,
  topics: String,
  topic_id: {
    type: Schema.Types.ObjectId,
    ref: 'topic'
  }
});

const topicSchema = new Schema({
  uuid: String,
  title: String,
  cards: String,
  card_id: {
    type: Schema.Types.ObjectId,
    ref: 'card'
  }
});

const cardSchema = new Schema({
  uuid: String,
  title: String,
  notes: Array,
});

// creats a model for the ${name} collection that will be part of the export
const Users = mongoose.model('user', userSchema);
const Categories = mongoose.model('category', categorySchema);
const Topics = mongoose.model('topic', topicSchema);
const Cards = mongoose.model('card', cardSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Users,
  Categories,
  Topics,
  Cards
};