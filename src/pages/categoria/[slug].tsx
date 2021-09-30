import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import LastNews from '../../components/LastNews';
import TopHeader from '../../components/TopHeader';
import { api } from '../../services/api';
import Loading from '../../components/Loading';
import NgIf from '../../components/NgIf';
import { IMatterDTO } from '../../interfaces/IMatterDTO';

export default function Home({ news, tops, category }: any) {
  const [homeNews, setHomeNews] = useState<IMatterDTO[]>(news);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const limit = 3;

  useEffect(() => {
    const serviceNews = async () => {
      if (category !== 'Nerd') {
        await api
          .get('/api/news/findByGame', {
            params: {
              game: category,
              limit,
              page: currentPage * limit,
            },
          })
          .then((response: any) => {
            if (response.data.length === 0) {
              return;
            }

            const data: IMatterDTO[] = response.data ?? [];

            setHomeNews((homeNewsInsideState: IMatterDTO[]) => [...homeNewsInsideState, ...data]);
            setLoading(false);
          })
          .catch((error: any) => console.log(error));

        return;
      }

      await api
        .get('/api/news/findByCategory', {
          params: {
            category,
            limit,
            page: currentPage * limit,
          },
        })
        .then((response: any) => {
          if (response.data.length === 0) {
            return;
          }

          const data: IMatterDTO[] = response.data ?? [];

          setHomeNews((homeNewsInsideState: IMatterDTO[]) => [...homeNewsInsideState, ...data]);
          setLoading(false);
        })
        .catch((error: any) => console.log(error));
    };

    serviceNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TopHeader key={tops} tops={tops} />
      </div>

      <div style={{ display: 'flex' }}>
        <div>
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
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slugArray = String(params?.slug).split('-');
  const option = slugArray[slugArray.length - 1];

  const { data } =
    option !== 'Nerd'
      ? await api.get('/api/news/findByGame', { params: { game: option } })
      : await api.get('/api/news/findByCategory', { params: { category: option } });

  return {
    props: {
      news: [],
      tops: [data[0], data[1], data[2]],
      category: option,
    },
  };
};
