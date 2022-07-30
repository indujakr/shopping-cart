import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
  const productList = useSelector((state) => state.allProducts.products);
  return (
    <div className="ui grid container">
      {productList.length === 0 ? <div>...Loading</div> : <ProductComponent />}
    </div>
  );
};

export default ProductList;
