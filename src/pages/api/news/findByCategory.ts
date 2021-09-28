import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db, ObjectId } from 'mongodb';
import { IMatterDTO } from '../../../interfaces/IMatterDTO';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { limit, page, category, id } = request.query;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let news: IMatterDTO[] = [];

    if (limit == undefined) {
      await db
        .collection('news')
        .find({
          category,
        })
        .sort({
          datepublication: -1,
        })
        .toArray()
        .then((results: any) => (news = results))
        .catch((error) => console.error(error));

      return response.json(news);
    }

    if (id != undefined) {
      await db
        .collection('news')
        .find({
          _id: { $ne: new ObjectId(String(id)) },
          category,
        })
        .sort({
          datepublication: -1,
        })
        .toArray()
        .then((results: any) => (news = results))
        .catch((error) => console.error(error));

      return response.json(news);
    }

    await db
      .collection('news')
      .find({
        category,
      })
      .sort({
        datepublication: -1,
      })
      .limit(Number(limit))
      .skip(Number(page))
      .toArray()
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    return response.json(news);
  } catch (error: any) {
    return response.json(error);
  }
};
