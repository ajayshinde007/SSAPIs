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
