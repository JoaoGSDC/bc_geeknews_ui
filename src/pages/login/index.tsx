/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import Image from 'next/image';

import logo from '../../../public/logo_geek_news.png';

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleLogin() {
    if (['JoaoGSDC', 'redacao_bycross'].includes(username) && password === '@Senha13579') {
      localStorage.setItem('logado', 'true');
      localStorage.setItem('username', username);

      router.push('dashboard');
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardModel}>
          <img src="/logo_geek_news.png" alt="ByCross" />

          <div className={styles.fieldsContainer}>
            <span>Usuário</span>
            <input type="text" onChange={(event: any) => setUsername(event.target.value)} />
          </div>

          <div className={styles.fieldsContainer}>
            <span>Senha</span>
            <input type="password" onChange={(event: any) => setPassword(event.target.value)} />
          </div>

          <button type="button" onClick={() => handleLogin()}>
            Entrar
          </button>
        </div>
      </div>
    </>
  );
}
