import { GetServerSideProps } from 'next';
import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import MoreRead from '../../components/MoreRead';
import TopHeader from '../../components/TopHeader';
import { api } from '../../services/api';

import styles from './styles.module.scss';

type Podcast = {
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

type PodcastProps = {
  podcasts: Podcast[];
};

export default function Podcast({ podcasts }: PodcastProps) {
  return (
    <>
      {/* <div className={styles.container}>
        {podcasts.map((notice: any) => (
          <MoreRead read={notice} />
        ))}
      </div> */}
      <div>
        <>
          <div>
            <div>
              <FaRegPlayCircle />
            </div>
            <h2>{podcasts[0].title}</h2>
            <img src={podcasts[0].image} alt="" />
          </div>
        </>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(`/podcasts`, {
    params: {
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    props: {
      podcasts: data,
    },
  };
};
