var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var GroceryListSchema = new Schema({
  id: Schema.Types.ObjectId,
  listName: String,
  status: String,
  date: { type: Date, default: Date.now }
});

mongoose.model('GroceryList', GroceryListSchema);

