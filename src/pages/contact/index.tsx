/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import MoreRead from '../../components/MoreRead';
import TopHeader from '../../components/TopHeader';
import { api } from '../../services/api';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>Contato</h1>

        <form>
          <div className={styles.fields}>
            <label>Nome</label>
            <input type="text" />
          </div>

          <div className={styles.fields}>
            <label>E-mail</label>
            <input type="email" />
          </div>

          <div className={styles.fields}>
            <label>Descrição</label>
            <textarea />
          </div>

          <button type="submit" onClick={() => {}}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/api/news/findPodcasts');

  return {
    props: {
      podcasts: data,
    },
  };
};
