const User = require('../models/model/user')

module.exports.getAllUsers = function () {
  return User.list()
}

module.exports.addNewUser = function (firstName, lastName, age) {
  console.log('----')
  return User.insert(firstName, lastName, age)
}