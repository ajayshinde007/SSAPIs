var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GroceryItemSchema = new Schema({
  id: Schema.Types.ObjectId,
  listName: String,
  barCode: String,
  price: String,
  status: String,
  date: {type: Date, default: Date.now}
});

mongoose.model('GroceryItem', GroceryItemSchema);

