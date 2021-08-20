import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { image, title, subtitle, matter, category, topmatter, datepublication, username, game, views } =
      request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);
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
      views,
    });

    return response.json(news);
  } catch (error: any) {
    return response.json(error);
  }
};
