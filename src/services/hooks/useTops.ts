import { api } from '../api';

export async function getTops(): Promise<any> {
  const { data } = await api.get(`news/top`, {
    params: {
      _limit: 10,
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    top: data,
  };
}
