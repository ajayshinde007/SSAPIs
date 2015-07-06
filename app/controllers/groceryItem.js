var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  GroceryItem = mongoose.model('GroceryItem');

module.exports = function (app) {
  app.use('/grocerylist', router);
};

router.get('/:id/items/', function (req, res, next) {
  GroceryItem.find({"listName":req.params.id},function (err, groceryListItems) {
    if (err) return next(err);

    res.send(groceryListItems);
    return;
  });
});


router.post('/:id/items/', function (req, res, next) {
  console.log('Hi I m here');
  var gli = req.body;

  var groceryListItem = new GroceryItem();
  groceryListItem.barCode = gli.barCode;
  groceryListItem.price = gli.price;
  groceryListItem.status = gli.status;
  groceryListItem.date = gli.listName;
  console.log(JSON.stringify(groceryListItem));


  /*
  groceryListItem.save(function (err, data) {
    if (err) {
      return next(err);
    }

  });*/
  res.send(groceryListItem);

  return;
});
