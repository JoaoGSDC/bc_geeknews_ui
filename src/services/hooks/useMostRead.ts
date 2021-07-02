import { api } from '../api';

export async function getMostRead(): Promise<any> {
  const { data } = await api.get(`news/more`, {
    params: {
      _limit: 10,
      _sort: 'datepublication',
      _order: 'desc',
    },
  });

  return {
    more: data,
  };
}
