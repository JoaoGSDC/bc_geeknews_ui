import { GetServerSideProps } from 'next';
import LastNews from '../components/LastNews';
import MoreRead from '../components/MoreRead';
import TopHeader from '../components/TopHeader';
import { api } from '../services/api';

import styles from '../styles/Home.module.scss';

export default function Home({ news, tops, moreRead }: any) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TopHeader tops={tops} />
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          {news.map((notice: any) => (
            <LastNews notice={notice} />
          ))}
        </div>

        <div className={styles.container}>
          <h2 style={{ color: '#fff', marginLeft: 20, borderBottom: '3px solid var(--main)', width: 150 }}>Em alta</h2>
          {moreRead.map((read: any) => (
            <MoreRead moreRead={read} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const respNews = await api.get(`/news`, {
    params: {
      _limit: 10,
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  const respTop = await api.get(`/news/top`, {
    params: {
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  const respMore = await api.get(`/news/more`, {
    params: {
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    props: {
      news: respNews.data,
      tops: respTop.data,
      moreRead: respMore.data,
    },
  };
};
