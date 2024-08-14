// // import mongoose, { connect } from 'mongoose';
import { dbUri } from './config.js';

// connect(dbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // export default mongoose;



import { MongoClient } from 'mongodb';

// Connection URI
const uri = 'mongodb+srv://ime851399:ssQquK4ZkHthcIOh@cluster0.hrqmflz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI

// Database and Collection
const dbName = 'courses';
const collectionName = 'Bilad';

async function run() {
  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected successfully to server');

    // Get the database and collection
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    // Define the query
    const query = { name: "John" }; // Example query to find documents where name is "John"
    
    // Find documents
    const cursor = collection.find(query);

    // Check if any documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    } else {
      // Iterate over the cursor and print each document
      await cursor.forEach(doc => console.log(doc));
    }

  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection to the MongoDB server
    await client.close();
  }
}

run().catch(console.dir);



// Import the required library (assuming you're using a Node.js environment)
const { MongoClient } = require('mongodb');

// Replace these with your actual connection details
const uri = "mongodb://your_connection_string";
const dbName = "your_database_name";
const collectionName = "your_collection_name";

async function findDocuments() {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Create a filter for the desired documents (optional, use {} for all)
    const filter = {};

    // Execute the find operation and obtain a cursor
    const cursor = collection.find(filter);

    // Count the matching documents efficiently
    const documentCount = await cursor.countDocuments();

    if (documentCount === 0) {
      console.log("No documents found!");
    } else {
      // Iterate over the documents using the for await...of loop (modern approach)
      for await (const doc of cursor) {
        console.log(doc);
      }
    }

    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

findDocuments();