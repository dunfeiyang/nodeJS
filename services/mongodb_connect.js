const mongoose = require('mongoose');

mongoose.Promise = Promise

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const uri = 'mongodb://localhost:27017/what_i_love'


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //useMongoClient: true - warning

const db = mongoose.connection;


db.on('open', () => {
  console.log('db connected')
})

db.on('error', (e) => {
  console.log(e)
})

module.exports = db;