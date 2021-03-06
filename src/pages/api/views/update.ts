import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db, ObjectId } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { id, views } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: any[] = [];

    await db
      .collection('news')
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { views },
        }
      )
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    console.log('Update news status: Success!\n');

    return response.json(news);
  } catch (error: any) {
    return response.json(error);
  }
};
