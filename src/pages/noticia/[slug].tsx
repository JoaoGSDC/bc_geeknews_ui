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

  const { data } = await api.get('/api/news/findOne', { data: { _id: id } });

  return {
    props: {
      news: {
        title: data[0].title,
        subtitle: data[0].subtitle,
        datepublication: convertDateWriteMode(new Date(data[0].datepublication)),
        image: data[0].image,
        matter: data[0].matter,
        username: data[0].username,
      },
    },
  };
};
