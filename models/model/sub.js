class Sub {
  constructor(userId, url) {
    this.userId = userId;
    this.url = url
  }
  static list() {
    return Sub.subscriptions
  }
  static insert(userId, url) {
    const sub = new Sub(userId, url);
    Sub.subscriptions = sub;
    return sub
  }
  static findByUserId(userId) {
    return Sub.subscriptions.map(s => s.userId == userId)
  }
}

Sub.subscriptions = []

module.exports = Sub