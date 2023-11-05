import Product from '../ProductCard/Product';
import IProduct from '../../interfaces/IProduct';
import './Products.css';

interface ProductsProps {
  products: IProduct[];
  searchItem: string;
  page: number;
  limitPages: number;
}

export default function Products(props: ProductsProps) {
  const { products, searchItem, page, limitPages } = props;
  const filteredProducts = products.filter((item) =>
    item.title.includes(searchItem)
  );

  const limitededProducts = products.slice(
    page * limitPages,
    page * limitPages + limitPages
  );

  const productsToDisplay =
    searchItem && filteredProducts ? filteredProducts : limitededProducts;

  return (
    <div className="cards-container">
      {productsToDisplay.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
}
