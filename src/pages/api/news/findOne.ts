import { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId, Db } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { _id } = request.query;
    console.log(request.query);
    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: any[] = [];

    await db
      .collection('news')
      .find({ _id: new ObjectId(String(_id)) })
      .toArray()
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    console.log('One value of news status: Success!\n');

    return response.json(news[0]);
  } catch (error: any) {
    return response.json(error);
  }
};
