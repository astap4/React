import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Products from './components/Products/Products';
import { getProducts } from './API/api';
import Loader from './components/UI/Loader/loader';
import './styles/app.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const fetchData = async () => {
    setIsDataLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.products);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setIsDataLoading(isDataLoading);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-wrapper">
      <Search setSearchItem={setSearchItem} />
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <Products products={products} searchItem={searchItem} />
      )}
    </div>
  );
}
