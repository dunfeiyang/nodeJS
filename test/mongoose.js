const mongoose = require('mongoose');

mongoose.Promise = Promise

const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const uri = 'mongodb://localhost:27017/what_i_love'

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //useMongoClient: true - warning

const db = mongoose.connection;

//unique 只能存在一条
//index 排序
const UserSchema = new Schema({
  name: { type: String, required: true, unique: true, index: 1 },
  age: { type: Number, max: 108, min: [0,'you are too young'] }
})

//生成users 规则加s
const UserModel = mongoose.model('user', UserSchema);

(async (params) => {
  // const user = await UserModel.create({
  //   name: 'dfy',
  //   age: 26
  // });

  // const user = await UserModel.findOne({})

  // const user = await UserModel.update({ name: 'dfy' }, {age: 166})

  // const user = await UserModel.remove({ name: 'dfy' })

  // return user;

  let filter = {};
  if (params.name) filter.name = params.name


  let flow = UserModel.find(filter);

  if (params.projection) flow.select(params.projection)
  
  if (params.sort) flow.sort(params.sort)
  
  const user = await flow.exec();

  return user
})({
  name: 'dfy1',
  projection: { age: 1 },
  // sort: {age: 1}
  sort: '-age'
})
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.log(e)
  })


db.on('open', () => {
  console.log('db connected')
})

db.on('error', (e) => {
  console.log(e)
})