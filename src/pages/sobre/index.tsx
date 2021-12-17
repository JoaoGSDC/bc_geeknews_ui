/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';

import styles from './styles.module.scss';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <h1>Sobre a Geek News</h1>

        <p>
          O portal de notícias Geek News é um portal com o objetivo de noticiar toda e qualquer notícia ou todo e
          qualquer conteúdo sobre o universo geek e nerd, seja em torno de conteúdos sobre games (os novos lançamentos,
          novidades do momento, jogos que ficaram disponíveis gratuitamente a usuários de plataformas como Steam e Epic
          Games, dentre outras plataformas), conteúdos sobre eSports, trazendo retrospetivas das última partidas
          realizadas em diversas modalidades de campeonatos como League of Legends, Free Fire, League of Legends: Wild
          Rift e Valorant, novidades sobre conteúdos cinematográficos como filmes e séries de universos como Marcel e
          DC.
        </p>

        <p>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/4Gx83I6YQKI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </p>
      </div>
    </>
  );
}
