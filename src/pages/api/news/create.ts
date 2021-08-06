import { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  const { image, title, subtitle, matter, category, topmatter, datepublication, username, game } = request.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);
  const newsCollection = db.collection('news');

  const news = newsCollection.insertOne({
    image,
    title,
    subtitle,
    matter,
    category,
    topmatter,
    datepublication,
    username,
    game,
    views: 0,
  });

  return response.json(news);
};
