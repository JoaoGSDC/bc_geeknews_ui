import { VercelRequest, VercelResponse } from '@vercel/node';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const newsCollection = db.collection('news');

  const news = newsCollection.find().limit(3);

  return response.json(news);
};
