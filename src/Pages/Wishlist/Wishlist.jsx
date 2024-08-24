import React, { useContext } from "react";
import { CountContext } from "../../Store/Store";
import ProductItem from "../../Components/ProductItem/ProductItem";

const Wishlist = () => {
  const { wishlist } = useContext(CountContext);
  return (
    <div>
      <ul>
        {wishlist &&
          wishlist.map((item) => (
            <li key={item.id}>
              <ProductItem product={item} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Wishlist;
