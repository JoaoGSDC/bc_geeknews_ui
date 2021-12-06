import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';
import fs from 'fs';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { filename } = request.query;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let images: any[] = [];

    await db
      .collection('images')
      .find({ filename })
      .toArray()
      .then((results: any) => (images = results))
      .catch((error) => console.error(error));

    const reader = fs.createReadStream(images[0].filename);
    reader.pipe(response);
    /* const readStream = db.createReadStream(images[0].filename);
    readStream.pipe(response); */

    return response.json({});
  } catch (error: any) {
    return response.json(error);
  }
};
