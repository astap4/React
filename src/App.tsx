import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import Products from './components/Products/Products';
import { getProducts, getSearchedProducts } from './API/api';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';
import Pagination from './components/Pagination/Pagination';
import { getCountPages } from './utils/countPages';
import LimitItems from './components/LimitItems/LimitItems';
import IProduct from './interfaces/IProduct';
import { useSearchParams } from 'react-router-dom';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || '1';
  const limitPage = searchParams.get('limitPage') || '6';

  const fetchData = useCallback(() => {
    setIsDataLoading(true);
    getProducts(Number(limitPage), Number(page))
      .then((response) => {
        setProducts(response.products);
        setTotalPages(getCountPages(Number(limitPage)));
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  }, [page, limitPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchSearchedItems = () => {
    setIsDataLoading(true);
    getSearchedProducts(searchItem)
      .then((response) => {
        setProducts(response.products);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  };

  return (
    <div className="app-wrapper">
      <header className="header">
        {
          <LimitItems
            setSearchParams={setSearchParams}
            fetchData={fetchData}
            setIsDataLoading={setIsDataLoading}
          />
        }
        {
          <Search
            setSearchItem={setSearchItem}
            fetchSearchedItems={fetchSearchedItems}
            fetchData={fetchData}
          />
        }
      </header>
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          {!isDataLoading && <Products products={products} />}
          {
            <Pagination
              setSearchParams={setSearchParams}
              page={page}
              totalPages={totalPages}
              fetchData={fetchData}
              setIsDataLoading={setIsDataLoading}
            />
          }
        </div>
      )}
    </div>
  );
}
