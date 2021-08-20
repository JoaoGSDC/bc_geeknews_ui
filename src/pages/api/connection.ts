import { MongoClient, Db } from 'mongodb';

let cachedDb: Db;

async function connectToDatabase(uri: string = '') {
  try {
    if (cachedDb) {
      return cachedDb;
    }

    const client = await MongoClient.connect(uri);
    const db = client.db(process.env.MONGODB_DB);
    cachedDb = db;

    console.log('MongoDB Connect Status: Success!');

    return db;
  } catch (error: any) {
    return error;
  }
}

export default connectToDatabase;
