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
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    setIsDataLoading(true);
    try {
      const response = await getProducts(limitPages, page);
      setProducts(response.products);
      console.log('products', products);
      // const totalCount = response.products.length;
      setTotalPages(getCountPages(limitPages));
      // console.log('totalCount', totalCount)
      console.log('limitPages', limitPages);
      // console.log('getCountPages', getCountPages(totalCount, limitPages))
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="app-wrapper">
      <header className="header">
        <LimitItems
          limitPages={limitPages}
          onUpdateLimitPages={(newLimitPages) => {
            setLimitPages(newLimitPages);
            setPage(0);
            fetchData();
          }}
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
