import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "../../Components/ProductItem/ProductItem";

const ProductList = () => {
  const [products, SetProducts] = useState([]);

  const getData = async () => {
    const res = await axios("https://dummyjson.com/products");
    SetProducts(res.data.products);
    // console.log(res.data.products)
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul className="all__products">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductItem product={product} />
              
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
