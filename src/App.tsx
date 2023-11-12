import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import Products from './components/Products/Products';
import { getProducts, getSearchedProducts } from './API/api';
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
      setTotalPages(getCountPages(limitPages));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(false);
  };

  const fetchSearchedItems = async () => {
    setIsDataLoading(true);
    try {
      const response = await getSearchedProducts(searchItem);
      setProducts(response.products);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(false);
  };

  useEffect(() => {
    if (searchItem !== '') {
      fetchSearchedItems();
    } else {
      fetchData(); // If searchItem is empty, fetch all items
    }
  }, [searchItem, page]);

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
          <Products products={products} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      )}
    </div>
  );
}
