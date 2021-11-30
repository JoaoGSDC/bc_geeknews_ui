import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const storage = new GridFsStorage({
      url: String(process.env.MONGODB_URI),
      options: { useNewUrlParser: true, useUnifiedTopology: true },
      file: (req: any, file: any) => {
        const match = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

        if (match.indexOf(file.mimetype) === -1) {
          const filename = `${Date.now()}-${file.originalname}`;
          return filename;
        }

        return {
          bucketName: 'photos',
          filename: `${Date.now()}-${file.originalname}`,
        };
      },
    });

    return response.json(storage);
  } catch (error: any) {
    return response.json(error);
  }
};
