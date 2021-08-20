import { VercelRequest, VercelResponse } from '@vercel/node';
import { ObjectId, Db } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    console.log(request.body);
    const { _id } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: any[] = [];

    await db
      .collection('news')
      .find({ _id: new ObjectId(_id) })
      .toArray()
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    console.log('One value of news status: Success!\n');

    return response.json(news);
  } catch (error: any) {
    return response.json(error);
  }
};
