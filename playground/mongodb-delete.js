//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//delete many
// const db = client.db('TodoApp');
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  // console.log('result');
// });

//deleteOne
// const db = client.db('TodoApp');
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
const db = client.db('TodoApp')
// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
//   console.log('result');
// });
db.collection('Users').deleteMany({name: 'Ashish Jain'});

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5add881cb993c321740f0cbd")
}).then((result) => {
  console.log(JSON.stringify(results, undefined, 2));
});

 //client.close();
});
