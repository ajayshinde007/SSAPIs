var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  GroceryItem = mongoose.model('GroceryItem');

module.exports = function (app) {
  app.use('/grocerylist', router);
};

router.get('/:id/items/', function (req, res, next) {
  //console.log(req.params.id);

  GroceryItem.find({"listName":req.params.id},function (err, groceryListItems) {
    if (err) return next(err);

    res.send(groceryListItems);
    return;
  });
});


router.post('/:id/items/', function (req, res, next) {
  console.log('Hi I m here');
  var gli = req.body;

  var raw = req.body.groceryItemdetails;
  var rawGroceryItems = raw.replace(/\\/g,"");
  var gli = JSON.parse(rawGroceryItems);


  var groceryListItem = new GroceryItem();
  //groceryListItem.barCode = gli.barCode;
  groceryListItem.price = gli.SalePrice;
  groceryListItem.status = gli.Status;
  groceryListItem.listName = req.params.id;
  groceryListItem.itemNo = gli.id;
  groceryListItem.itemDescription = gli.ItemName;
  //groceryListItem.quantity = gli.quantity;
  groceryListItem.totalCost = gli.SalePrice;
  groceryListItem.thumbnailImage = gli.ImageUri;



  groceryListItem.save(function (err, data) {
    if (err) {
      console.log(err);

      return;
    }
    //console.log(data);

  });
  res.send(groceryListItem);

  return;
});
