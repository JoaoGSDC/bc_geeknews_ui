import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    const { limit, page } = request.query;

    if (limit == undefined) {
      let news: any[] = [];

      await db
        .collection('news')
        .find()
        .sort({
          datepublication: -1,
        })
        .toArray()
        .then((results: any) => (news = results))
        .catch((error) => console.error(error));

      console.log('\nAll values of news status: Success!\n');

      return response.json(news);
    }

    let news: any[] = [];

    await db
      .collection('news')
      .find()
      .sort({
        datepublication: -1,
      })
      .limit(Number(limit))
      .skip(Number(page))
      .toArray()
      .then((results: any) => (news = results))
      .catch((error) => console.error(error));

    console.log('\nAll values of news status: Success!\n');

    return response.json(news);
  } catch (error: any) {
    console.log('All values of news status: Fail!');
    return response.json(error);
  }
};
