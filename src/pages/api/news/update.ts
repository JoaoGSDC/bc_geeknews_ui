import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db, ObjectId } from 'mongodb';
import { IMatterDTO } from '../../../interfaces/IMatterDTO';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { id, title, subtitle, image, matter, category, game, username } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: IMatterDTO[] = [];

    await db
      .collection('news')
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { title, subtitle, image, matter, category, game, username },
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
