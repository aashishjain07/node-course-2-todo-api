//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Ashish', age: 25};
// var {name} = user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//  text: 'Something to do',
//  completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to do insert todo', err);
//   }
//
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });

//insert new doc into user collection  (name, age, location)
// db.collection('Users').insertOne({
//   name: 'Ashish Jain',
//   age: 25,
//   location: 'Delhi',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert users', err);
//
// } //This is callback
// console.log(result.ops[0]._id.getTimestamp());
// });
  client.close();
});
