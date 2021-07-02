import { GetServerSideProps } from 'next';
import React from 'react';
import MoreRead from '../../components/MoreRead';
import TopHeader from '../../components/TopHeader';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type Videocast = {
  id: string;
  title: string;
  subtitle: string;
  matter: string;
  category: string;
  topmatter: number;
  views: number;
  datepublication: Date;
  image: string;
  duration: number;
  game: string;
};

type VideocastProps = {
  videocasts: Videocast[];
};

export default function Videocast({ videocasts }: VideocastProps) {
  return (
    <>
      <div className={styles.container}>
        {videocasts.map((notice: any) => (
          <MoreRead read={notice} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(`/videocasts`, {
    params: {
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    props: {
      videocasts: data,
    },
  };
};
