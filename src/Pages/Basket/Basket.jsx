import React, { useContext } from "react";
import { CountContext } from "../../Store/Store";
import ProductItem from "../../Components/ProductItem/ProductItem";

const Basket = () => {
  const { basket } = useContext(CountContext);
  return (
    <div>
      <ul className="all__products">
        {basket &&
          basket.map((item) => (
            <li key={item.id}>
             {item.title}--{item.price} --{item.count}<button>delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Basket;
