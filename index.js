import express from "express";
// import { MongoClient } from "mongodb";
import mongoose from "mongoose";
// import {bodyParser } from 'body-parser';
import "dotenv/config";
import './src/db_connect.js'

// created an express app
const app = express();
const PORT = process.env.PORT || 3001;
// connecting to MongoDB
const uri = "mongodb://localhost:27017/imarticus";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB!"))
  .catch(() => console.log("Error connecting to MongoDB"));




// const dbName = 'imarticus';
// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to MongoDB');
//   const db = client.db(dbName);
// //   console.log(db);
//   const users = db.collection('users');

// //   const inser_user = await users.insertOne({username:"user6",age:34})
//     // await users.deleteMany({username:"user"})
// //   console.log(inser_user);

// //   let res = await users.find({}).toArray();

// //   console.log(res);

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
