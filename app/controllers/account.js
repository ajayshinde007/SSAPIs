var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Account = mongoose.model('Account');

module.exports = function (app) {
  app.use('/account', router);
};

router.get('/', function (req, res, next) {
  Account.find({"loginId": req.query.loginId}, function (err, data) {
    if (err) return next(err);

    res.send(data);
    return;
  });
});


router.post('/', function (req, res, next) {
  var acct = req.body;

  var account = new Account();
  account.accountRefId = acct.accountRefId;
  account.availableBalance = acct.availableBalance;
  account.currentBalance = acct.currentBalance;
  account.creditLimit = acct.creditLimit;
  account.loginId = acct.loginId;
  account.loginPassport = acct.loginPassport;

  account.save(function (err, data) {
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
  var raw = req.body.accountdetails;
  var rawAcct = raw.replace(/\\/g,"");
  var acct = JSON.parse(rawAcct);

  Account.find({"loginId": req.query.loginId}, function (err, selectedAccount) {

    var newacct = selectedAccount[0];
    newacct.accountRefId = acct.accountRefId;
    newacct.availableBalance = acct.availableBalance;
    newacct.currentBalance = acct.currentBalance;
    newacct.creditLimit = acct.creditLimit;
    newacct.loginId = acct.loginId;
    newacct.loginPassport = acct.loginPassport;
    newacct.save(function (err, data) {
      if (err) {
        console.log(err);
        res.send(500, err);
        return;
      }
      console.log(data);
      res.send(data);
      return;
    });

  });


});
