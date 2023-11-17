import axios from 'axios';

export async function getProducts(limit: number, page: number) {
  const response = await axios.get(
    `https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const content = response.data;
  return content;
}

export async function getSearchedProducts(searchItem: string) {
  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${searchItem}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const content = response.data;
  return content;
}

export async function getProductDetails(id: string) {
  const response = await axios.get(`https://dummyjson.com/products/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  const content = response.data;
  return content;
}
