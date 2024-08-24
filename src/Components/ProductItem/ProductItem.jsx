import React, { useContext, useState } from "react";
import { CountContext } from "../../Store/Store";

const ProductItem = ({ product }) => {
  const {AddToWishlist } = useContext(CountContext);
  const {AddToBasket } = useContext(CountContext);
  const [fav, setFav] = useState(false);


  const btnClickHandler = () => {
    AddToWishlist(product);
    setFav((state) => !state);
  };

  const basketbtnClickHandler = () => {
    AddToBasket(product);
  };
  return (
    <div>
      <img src={product.thumbnail} alt="" />
      <h3>{product.title}</h3>
      <button onClick={btnClickHandler}>
        {fav ? "remove from " : "Add to"}
        Add to wishlist
      </button>
      <button onClick={basketbtnClickHandler}>Add to basket</button>
    </div>
  );
};

export default ProductItem;
