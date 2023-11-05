import Hero from '../ProductCard/Product';
import IHero from '../../interfaces/IProduct';
import './Products.css';

interface ProductsProps {
  products: IHero[];
  searchItem: string;
}

export default function Products(props: ProductsProps) {
  const { products, searchItem } = props;
  const filteredProducts = products.filter((item) =>
    item.title.includes(searchItem)
  );

  return (
    <div className="cards-container">
      {filteredProducts.map((item) => (
        <Hero key={item.id} {...item} />
      ))}
    </div>
  );
}
