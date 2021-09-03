/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Matter({ news }: any) {
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
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugArray = String(params?.slug).split('-');
  const id = slugArray[slugArray.length - 1];

  const { data } = await api.get('/api/news/findOne', { params: { _id: id } });

  await api.put('/api/views/update', { id, views: Number(data.views) + 1 });

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
    },
  };
};
