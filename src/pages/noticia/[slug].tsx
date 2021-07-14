import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';
import Image from 'next/image';

import styles from './styles.module.scss';

export default function Matter({ news }: any) {
  const { title, subtitle, datepublication, image, matter } = news;

  function createMatter() {
    return { __html: matter };
  }

  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <span>{datepublication}</span>
        <Image src={image} alt="" />
        <div dangerouslySetInnerHTML={createMatter()} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugArray = String(params?.slug).split('-');
  const maxIndex = slugArray.length - 1;
  const id = `${slugArray[maxIndex - 4]}-${slugArray[maxIndex - 3]}-${slugArray[maxIndex - 2]}-${
    slugArray[maxIndex - 1]
  }-${slugArray[maxIndex]}`;

  const { data } = await api.get(`/news/${id}`);

  return {
    props: {
      news: {
        title: data[0].title,
        subtitle: data[0].subtitle,
        datepublication: convertDateWriteMode(new Date(data[0].datepublication)),
        image: data[0].image,
        matter: data[0].matter,
      },
    },
  };
};
