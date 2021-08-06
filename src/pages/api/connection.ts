import { MongoClient, Db } from 'mongodb';

let cachedDb: Db;

async function connectToDatabase(uri: string = '') {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri);

  const dbName = new URL(uri)?.pathname.substr(1);
  const db = client.db('news');

  cachedDb = db;

  return db;
}

export default connectToDatabase;
