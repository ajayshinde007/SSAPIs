/**
 * Created by kez741 on 8/4/15.
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RewardsSchema = new Schema({
  id: Schema.Types.ObjectId,
  accountRefId: String,
  rewardsDescription: String,
  imagePath:String,
  goalPoints: String,
  actualPoints: String,
  priority:String,
  date: {type: Date, default: Date.now}
});

mongoose.model('Rewards', RewardsSchema);

