import { useLocation, useNavigate } from 'react-router-dom';
import IProduct from '../../interfaces/IProduct';
import './product.scss';

export default function Product(props: IProduct) {
  const { id, title, description, price, images } = props;
  const { search } = useLocation();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate({
          pathname: `/${id.toString()}`,
          search,
        });
      }}
    >
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            <em>{description}</em>
          </h6>
          <img
            className="cart-product__image d-block"
            src={images[0]}
            alt={title}
          />
          <div className="cart-product__wrapper d-flex justify-content-between align-items-center">
            <div className="cart-product__details d-flex flex-column">
              <span className="text-warning">
                Price: ${price}
                <i className="fas fa-percent"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
