import axios from 'axios';

async function getResponse(url: string) {
  const response = await axios.get(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response;
}

export async function getProducts() {
  const BASE_URL = 'https://dummyjson.com';
  const response = await getResponse(`${BASE_URL}/products?limit=100`);
  const content = response.data;
  return content;
}
