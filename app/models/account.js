var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AccountSchema = new Schema({
  id: Schema.Types.ObjectId,
  accountRefId: String,
  availableBalance: String,
  currentBalance: String,
  creditLimit: String,
  loginId: String,
  loginPassport: String,
  dateOpened: { type: Date, default: Date.now }
});

mongoose.model('Account', AccountSchema);

