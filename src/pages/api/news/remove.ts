import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { _id } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: any[] = [];

    await db
      .collection('news')
      .deleteOne({
        _id,
      })
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    return response.json(news);
  } catch (error: any) {
    return response.json(error);
  }
};
