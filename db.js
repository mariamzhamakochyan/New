const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; 
const options = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDB() {
  try {
    const client = await MongoClient.connect(uri, options);
    const db = client.db(); 
    console.log('Connected to the database');
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = { connectToDB };
