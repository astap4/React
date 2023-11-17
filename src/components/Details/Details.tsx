import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css';
import { getProductDetails } from '../../API/api';
import IProduct from '../../interfaces/IProduct';
import Loader from '../UI/Loader/loader';

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct>();
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const { search } = useLocation();

  const fetchDetails = useCallback(() => {
    setIsDataLoading(true);
    getProductDetails(location.pathname.slice(1))
      .then((response) => {
        if (response) setProduct(response);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  }, [location]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleClose = () => {
    navigate({
      pathname: '/',
      search,
    });
  };

  return (
    <div className="detailes-container">
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          <div className="details-img-wrapper">
            <img className="details-img" src={product?.images[0]} />
          </div>
          <div className="details-descr">
            <div className="details-title">{product?.title}</div>
            <div>Brand: {product?.brand}</div>
            <div>Price: {product?.price}</div>
          </div>
          <button onClick={handleClose}>Close</button>
        </>
      )}
    </div>
  );
}
