import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import LastNews from '../components/LastNews';
import MoreRead from '../components/MoreRead';
import TopHeader from '../components/TopHeader';
import { api } from '../services/api';

import styles from '../styles/Home.module.scss';
import Loading from '../components/Loading';
import NgIf from '../components/NgIf';

export default function Home({ news, tops, moreRead }: any) {
  const [homeNews, setHomeNews] = useState<any>(news);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const limit = 5;

  useEffect(() => {
    const serviceNews = async () => {
      await api
        .get('/api/news/findAll', {
          params: {
            limit,
            page: currentPage * limit,
          },
        })
        .then((response: any) => {
          if (response.data.length === 0) {
            return;
          }

          setHomeNews((homeNewsInsideState: any) => [...homeNewsInsideState, ...response.data]);
          setLoading(false);
        })
        .catch((error: any) => console.log(error));
    };

    serviceNews();
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting)) {
        setCurrentPage((currentPageInsideState: number) => currentPageInsideState + 1);
      }
    });

    const sentinela: Element = document.querySelector('#sentinela') as Element;
    intersectionObserver.observe(sentinela);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TopHeader key={tops} tops={tops} />
        </div>

        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0px 15px' }}>
            {homeNews.map((notice: any) => (
              <LastNews key={notice._id} notice={notice} />
            ))}

            <div id="sentinela" />

            <NgIf condition={loading}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <Loading />
              </div>
            </NgIf>
          </div>

          <div className={styles.container}>
            <h2 style={{ color: '#fff', marginLeft: 20, borderBottom: '3px solid var(--main)', width: 175 }}>
              Mais lidas
            </h2>
            {moreRead.map((read: any) => (
              <MoreRead key={read._id} moreRead={read} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const respTop = await api.get('/api/news/findTop');
  const respMore = await api.get('/api/news/findMostRead');

  return {
    props: {
      news: [],
      tops: respTop.data,
      moreRead: respMore.data,
    },
  };
};
