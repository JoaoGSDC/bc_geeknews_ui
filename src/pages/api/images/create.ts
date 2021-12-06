import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import upload from '../../../middleware/upload';
import connectToDatabase from '../connection';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { file } = request.body;
    if (!file) {
      throw new Error('Image is not presented!');
    }

    /* const file64 = dataUri(req.file);
    const uploadResult = await cloudinaryUpload(file64.content);
    const cImage = new CloudinaryImage({ cloudinaryId: uploadResult.public_id, url: uploadResult.secure_url }); */
    /* await cImage.save(); */

    return response.json({});
  } catch (error: any) {
    return response.json(error);
  }
};
