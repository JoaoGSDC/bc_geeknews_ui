import { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  const { _id } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const newsCollection = db.collection('news');

  const news = newsCollection.updateOne(
    {
      _id,
    },
    {
      $set: request.body,
    }
  );

  return response.json(news);
};
