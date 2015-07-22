var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GroceryItemSchema = new Schema({
  id: Schema.Types.ObjectId,
  listName: String,
  itemNo:Number,
  itemName:String,
  itemDescription:String,
  barCode: String,
  price: Number,
  totalCost:Number,
  quantity:Number,
  status: String,
  creationDate: {type: Date, default: Date.now}
});

mongoose.model('GroceryItem', GroceryItemSchema);

