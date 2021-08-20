/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import MoreRead from '../../components/MoreRead';
import TopHeader from '../../components/TopHeader';
import { api } from '../../services/api';
import Image from 'next/image';

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
  image: any;
  duration: number;
  game: string;
};

type PodcastProps = {
  podcasts: Podcast[];
};

export default function Podcast({ podcasts }: PodcastProps) {
  return (
    <>
      <div>
        <>
          <div>
            <div>
              <FaRegPlayCircle />
            </div>
            <h2>{podcasts[0].title}</h2>
            <img src={podcasts[0].image} alt="image" />
          </div>
        </>
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
