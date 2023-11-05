import axios from 'axios';

export async function getProducts(limit: number, page: number) {
  const response = await axios.get('https://dummyjson.com/products', {
    headers: {
      Accept: 'application/json',
    },
    params: {
      _limit: limit,
      _page: page,
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const content = response.data;
  return content;
}
