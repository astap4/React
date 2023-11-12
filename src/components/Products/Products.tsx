import Product from '../ProductCard/Product';
import IProduct from '../../interfaces/IProduct';
import './products.css';

interface ProductsProps {
  products: IProduct[];
}

export default function Products(props: ProductsProps) {
  const { products } = props;

  return (
    <div className="cards-container">
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
