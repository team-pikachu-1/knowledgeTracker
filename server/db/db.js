const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const MONGO_URI = process.env.MONGO_URI;
const SALT_WORK_FACTOR = 12;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  dbName: 'knowledgeTracker' // name of the DB that our collections are part of
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log('Connection to Mongo DB failed: ', err));

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  uuid: String,
  title: String,
  isReady: {
    type: Boolean,
    default: false
  },
  notes: [{
    noteId: String,
    description: String
  }]
});

const categorySchema = new Schema({
  uuid: String,
  title: String,
  topics: [{
    type: topicSchema,
    ref: 'topic'
  }]
});

// sets a schema for the 'User' collection
const userSchema = new Schema({
  uuid: String,
  username: String,
  password: String,
  email: String,
  categories: [{
    type: categorySchema,
    ref: 'category'
  }]
});

// hash password before creating new user instance
userSchema.pre('save', function(next) {
  // scope user as this
  const user = this;
  bcrypt.hash(this.password, SALT_WORK_FACTOR)
    .then(hash => {
      // re-assign this.password to hashed password
      this.password = hash;
      console.log('hash: ', hash);
      return next();
    })
    .catch(err => next(err));
});

// create a method "comparePassword" to be applied on all user instances
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password)
    .then(isMatch => {
      cb(null, isMatch);
    })
    .catch(err => cb(err));
};

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 86400, default: Date.now }
});

// creats a model for the ${name} collection that will be part of the export
const Users = mongoose.model('user', userSchema);
const Categories = mongoose.model('category', categorySchema);
const Topics = mongoose.model('topic', topicSchema);
const Sessions = mongoose.model('session', sessionSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  Users,
  Categories,
  Topics,
  Sessions
};