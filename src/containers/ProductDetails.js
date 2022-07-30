import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  removeProduct,
  selectProductThunk,
} from "../redux/actions/productAction";

const ProductDetails = () => {
  const { productId } = useParams();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const { image, title, price, category, description } = selectedProduct;
  const dispatcher = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatcher(selectProductThunk(productId));
    }
    return () => {
      dispatcher(removeProduct());
    };
    // eslint-disable-next-line
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(selectedProduct).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <button className="ui teal tag label">${price}</button>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
