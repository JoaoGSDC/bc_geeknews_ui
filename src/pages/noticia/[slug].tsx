/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';
import Image from 'next/image';

import styles from './styles.module.scss';
import MoreRead from '../../components/MoreRead';
import Link from 'next/link';

export default function Matter({ news, readToo }: any) {
  const { title, subtitle, datepublication, image, matter, username } = news;

  function createMatter() {
    return { __html: matter };
  }

  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <span>
          {datepublication} - {username}
        </span>
        <img src={image} alt="" />
        <div dangerouslySetInnerHTML={createMatter()} />
        <hr />
      </div>

      <h2 style={{ color: '#fff', marginLeft: 150, borderBottom: '3px solid var(--main)', width: 300 }}>Leia também</h2>
      <div className={styles.readTooContainer}>
        <div className={styles.readTooContainer}>
          {readToo.map((read: any) => (
            <>
              <MoreRead key={read._id} moreRead={read} />
              <MoreRead key={read._id} moreRead={read} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugArray = String(params?.slug).split('-');
  const id = slugArray[slugArray.length - 1];

  const { data } = await api.get('/api/news/findOne', { params: { _id: id } });

  await api.put('/api/views/update', { id, views: Number(data.views) + 1 });

  let readToo: any[] = [];

  if (data.game === '') {
    await api
      .get('/api/news/findByCategory', {
        params: {
          category: data.category,
          limit: 3,
          page: 1,
        },
      })
      .then((response: any) => (readToo = response.data))
      .catch((error: any) => console.log(error));
  } else {
    await api
      .get('/api/news/findByGame', {
        params: {
          game: data.game,
          limit: 4,
          page: 1,
        },
      })
      .then((response: any) => (readToo = response.data))
      .catch((error: any) => console.log(error));
  }

  return {
    props: {
      news: {
        title: data.title,
        subtitle: data.subtitle,
        datepublication: convertDateWriteMode(new Date(data.datepublication)),
        image: data.image,
        matter: data.matter,
        username: data.username,
      },
      readToo,
    },
  };
};
