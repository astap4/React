import Product from '../ProductCard/Product';
import IProduct from '../../interfaces/IProduct';
import './Products.css';

interface ProductsProps {
  products: IProduct[];
}

export default function Products(props: ProductsProps) {
  const { products } = props;
  // const filteredProducts = products.filter((item) =>
  //   item.title.toLowerCase().includes(searchItem)
  // );

  // const productsToDisplay =
  //   searchItem && filteredProducts ? filteredProducts : products;

  return (
    <div className="cards-container">
      {products.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
