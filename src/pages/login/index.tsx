/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';

import { ILoginDTO } from '../../interfaces/ILoginDTO';
import { api } from '../../services/api';

export default function Login() {
  useEffect(() => {
    const token: string = String(localStorage.getItem('checked'));

    if (!['null', 'undefined'].includes(token)) {
      router.push('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  const { register, handleSubmit } = useForm();

  async function handleSignIn({ username, password }: ILoginDTO) {
    await api
      .post('/api/auth/auth', {
        username,
        password,
      })
      .then((response: any) => {
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('checked', response.data.token);
        router.push('/dashboard');
      })
      .catch((error: any) => console.log(error));
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardModel}>
          <img src="/logo_gkn.png" alt="ByCross" />

          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className={styles.fieldsContainer}>
              <h3>Usuário</h3>
              <input {...register('username')} type="text" />
            </div>

            <div className={styles.fieldsContainer}>
              <h3>Senha</h3>
              <input {...register('password')} type="password" />
            </div>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
