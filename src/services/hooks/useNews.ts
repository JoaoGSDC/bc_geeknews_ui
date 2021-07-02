import { api } from '../api';

export async function getNews(page: number): Promise<any> {
  const { data } = await api.get(`news`, {
    params: {
      _limit: 10,
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    news: data,
  };
}
