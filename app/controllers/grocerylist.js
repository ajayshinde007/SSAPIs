var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  GroceryList = mongoose.model('GroceryList');

module.exports = function (app) {
  app.use('/grocerylist', router);
};

router.get('/', function (req, res, next) {
  var filters = {}
  if(req.query.status !=  undefined){
    filters = {status:req.query.status};
  }

  GroceryList.find(filters,function (err, groceryLists) {
    if (err) return next(err);

    res.send(groceryLists);
    return;
  });
});


router.post('/', function (req, res, next) {
  var gl = req.body;
  console.log('I m not suppose to here');
  var groceryList = new GroceryList();
  groceryList.status =  gl.status;
  groceryList.listName = gl.listName;

  groceryList.save(function (err, data) {
    if (err) {
      return next(err);
    }
  });
  res.send(groceryList);

  return;
});



router.put('/', function (req, res, next) {

  var filters = {}
  if(req.body.listName !=  undefined){
    filters = {listName:req.body.listName};
  }

  console.log(req.body.listName);
  console.log(req.body.status);

  GroceryList.find(filters,function (err, groceryLists) {
    var groceryList = groceryLists[0];

    groceryList.status = req.body.status;

    groceryList.save(function (err, data) {
      if (err) {
        return next(err);
      }
    });
    res.send(groceryList);

    return;
  });
});
