import { Link } from "react-router-dom";

const ProductLink = ({ productItem }) => {
  return (
            <Link to={`/product/${productItem.id}`}>
              <div className="product-image-container">
                <img
                  src={productItem.image}
                  alt={productItem.title}
                  className="product-image"
                />
              </div>
              <p className="product-title">{productItem.title}</p>
            </Link>
  );
};

export default ProductLink;
