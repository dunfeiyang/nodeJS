var express = require('express');
var router = express.Router();


// const User = require('../models/model/user')

const UserService = require('../services/user')


/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');


  // const u = new User(req.query.firstName, req.query.lastName, req.query.age)
  // res.locals.user = u;
  // res.render('user')


  const users = UserService.getAllUsers()
  console.log(users)
  res.locals.users = users
  res.render('user')

});

router.post('/', function(req, res, next) {
  const { firstName, lastName, age } = req.body
  console.log(req.body)
  const u = UserService.addNewUser(firstName, lastName, age)
  res.json(u)
});

// router.get('/:userId', (req, res) => {
  
// })

module.exports = router;
