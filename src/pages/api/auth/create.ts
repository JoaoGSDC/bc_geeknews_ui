import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

import bcrypt from 'bcrypt';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { loginUser, username, password } = request.body;

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);
    const usersCollection = db.collection('users');

    const hash = await bcrypt.hash(password, 10);

    usersCollection.insertOne({
      loginUser,
      username,
      password: hash,
    });

    return response.json({ status: 'Usuário cadastrado com sucesso!' });
  } catch (error: any) {
    return response.json(error);
  }
};
