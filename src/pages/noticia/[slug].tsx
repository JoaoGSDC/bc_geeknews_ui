/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps } from 'next';
import React from 'react';
import { api } from '../../services/api';
import { convertDateWriteMode } from '../../utils/convertDateWriteMode';

import styles from './styles.module.scss';
import MoreRead from '../../components/MoreRead';
import Head from 'next/head';

export default function Matter({ news, readToo, slug }: any) {
  const { title, subtitle, datepublication, image, matter, username } = news;

  function createMatter() {
    return { __html: matter };
  }

  const url = `https://portalgeeknews.com.br/noticia/${slug}`;
  const ogImageUrl = image.replace('.webp', '.png');

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={subtitle} />

        <meta property="og:site_name" content="Geek News" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />

        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={subtitle} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <div className={styles.container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <span>
          {datepublication} - {username}
        </span>
        <img src={image} alt="image" />
        <div dangerouslySetInnerHTML={createMatter()} />
        <hr />
      </div>

      <h2 style={{ color: '#fff', marginLeft: '10%', borderBottom: '3px solid var(--main)', width: 300 }}>
        Veja também
      </h2>
      <div className={styles.readTooContainer}>
        <div className={styles.readTooContainer}>
          {readToo.map((read: any) => (
            <>
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
          page: 0,
          id: data._id,
        },
      })
      .then((response: any) => (readToo = response.data))
      .catch((error: any) => console.log(error));
  } else {
    await api
      .get('/api/news/findByGame', {
        params: {
          game: data.game,
          limit: 3,
          page: 0,
          id: data._id,
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
      slug: String(params?.slug),
    },
  };
};
