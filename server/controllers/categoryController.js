const { v4: uuidv4 } = require('uuid');
const { Categories } = require('../db/db.js');
const { Users } = require('../db/db.js');

const categoryController = {};

categoryController.getAllCategories = (req, res, next) => {
  Categories.find({})
    .then((categories) => {
      console.log('Retrieving all categorys from DB...');
      res.locals.categories = categories;
  })
    .catch(error => {
      return next({
        log: error,
        message: { err: `categoryController.getAllcategorys ERR: ${error}` },
      })
    });
}

categoryController.createCategory = async (req, res, next) => {
  console.log('enter categoryController.createCategory');
  // deconstruct category name and username from req.body
  const { categoryName, userId } = req.body;
  const categoryId = uuidv4();

  // create new category
  const newCat = await Categories.create({
    uuid: categoryId,
    title: categoryName,
    notes: [],
  })
    .then(response => {
      console.log('response -> newCat: ', response);
      return response;
    })
    .catch(error => {
      return next({
        log: error,
        message: { err: `categoryController.create ERR 1: ${error}` },
      })
    });

  // push new category onto user
  const user = await Users.findOneAndUpdate( 
    { uuid: userId }, 
    { $push: {
        categories: { ...newCat }
      }
    },
    { new: true }
  )
    .then(response => {
      // res.locals.newCat = newCat;
      res.locals = response;
      return next();
    })
    .catch(error => next({
      log: error,
      message: { err: `categoryController.create ERR 2: ${error}` },
    }));

};

module.exports = categoryController;