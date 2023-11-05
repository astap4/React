import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import Products from './components/Products/Products';
import { getProducts } from './API/api';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';
import Pagination from './components/Pagination/Pagination';
import { getCountPages } from './utils/countPages';
import LimitItems from './components/LimitItems/LimitItems';

export default function App() {
  const [products, setProducts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [page, setPage] = useState(0);
  const [limitPages, setLimitPages] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    setIsDataLoading(true);
    try {
      const response = await getProducts(limitPages, page);
      setProducts(response.products);
      setTotalCount(response.products.length);
      setTotalPages(getCountPages(totalCount, limitPages));
      console.log(response);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(isDataLoading);
  };

  useEffect(() => {
    fetchData();
    setTotalPages(getCountPages(totalCount, limitPages));
  }, [page, totalCount, limitPages]);

  return (
    <div className="app-wrapper">
      <header className="header">
        <LimitItems
          limitPages={limitPages}
          onUpdateLimitPages={setLimitPages}
        />
        <Search setSearchItem={setSearchItem} />
      </header>
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Products
            products={products}
            searchItem={searchItem}
            page={page}
            limitPages={limitPages}
          />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      )}
    </div>
  );
}
