const users = []

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName
    this.age = age
  }
  getName() {
    return `${this.firstName}${this.lastName}`
  }
  static insert(firstName, lastName, age) {
    const u = new User(firstName, lastName, age)
    User.users.push(u)
    return u
  }
  static getOneByName(firstName, lastName) {
    return User.users.find(u => firstName && u.firstName === firstName)
  }
  static list(query) {
    return User.users
  }
  static get ['users']() {
    return users
  }
}


module.exports = User;

// console.log(User.list());
// console.log(User.insert('d', 'fy', 18))
// console.log(User.list());

// console.log(User.insert('d2', 'fy2', 19))
// console.log(User.list());

// console.log(User.getOneByName('d','fy'))