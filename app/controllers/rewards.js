var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Rewards = mongoose.model('Rewards');

module.exports = function (app) {
  app.use('/rewards', router);
};

router.get('/', function (req, res, next) {
  Rewards.find({"accountRefId": req.query.accountRefId}, function (err, data) {
    if (err) return next(err);

    res.send(data);
    return;
  });
});


router.post('/', function (req, res, next) {
  var rewrd = req.body;

  var reward = new Rewards();
  reward.accountRefId = rewrd.accountRefId;
  reward.rewardsDescription = rewrd.rewardsDescription;
  reward.imagePath = rewrd.imagePath;
  reward.goalPoints = rewrd.goalPoints;
  reward.actualPoints = rewrd.actualPoints;
  reward.priority = rewrd.priority;

  reward.save(function (err, data) {
    if (err) {
      console.log(err);
      res.send(500, err);
      return;
    }
    res.send(data);
    return;
  });
});


router.put('/', function (req, res, next) {
  var raw = req.body.rewardDetails;
  var rawReward = raw.replace(/\\/g,"");
  var rewrd = JSON.parse(rawReward);

  Rewards.find({"accountRefId": req.query.accountRefId}, function (err, data) {

    var reward = data[0];

    reward.accountRefId = rewrd.accountRefId;
    reward.rewardsDescription = rewrd.rewardsDescription;
    reward.imagePath = rewrd.imagePath;
    reward.goalPoints = rewrd.goalPoints;
    reward.actualPoints = rewrd.actualPoints;
    reward.priority = rewrd.priority;

    reward.save(function (err, data) {
      if (err) {
        console.log(err);
        res.send(500, err);
        return;
      }
      res.send(data);
      return;
    });
  });
});
