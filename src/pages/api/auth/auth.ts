import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db } from 'mongodb';
import connectToDatabase from '../connection';

import bcrypt from 'bcrypt';
import { setCookie } from 'nookies';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (request: VercelRequest, response: VercelResponse): Promise<VercelResponse> => {
  try {
    const { username, password } = request.body;

    console.log(request.body);

    const db: Db = await connectToDatabase(process.env.MONGODB_URI);

    let user: any = {};

    await db
      .collection('users')
      .find({ username })
      .toArray()
      .then((results: any) => console.log(results))
      .catch((error) => console.error(error));

    console.log(username, user);

    /* if (!user.username) {
      return response.json({ error: 'Usuário inválido!' });
    }

    const pw = await bcrypt.compare(password, user.password);

    if (!pw) {
      return response.json({ error: 'Senha inválida!' });
    } */

    const token = await bcrypt.hash(username, 10);

    return response.json({ username, token });
  } catch (error: any) {
    return response.json(error);
  }
};
