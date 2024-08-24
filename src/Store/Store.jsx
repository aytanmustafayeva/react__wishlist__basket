import { createContext, useState } from "react";

export const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [wishlist, SetWishlist] = useState([]);
  const [basket, SetBasket] = useState([]);

  const AddToWishlist = (data) => {
    const existProduct = wishlist.find((item) => item.id === data.id);
    if (existProduct) {
      SetWishlist((state) => state.filter((item) => item.id !== data.id));
      return;
    }
    SetWishlist((state) => [...state, data]);
  };



  const AddToBasket = (data) => {
    const existProduct = basket.find((item) => item.id === data.id);
    if (existProduct) {
      SetBasket((state) => state.map((item) => 
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      SetBasket((state) => [...state, { ...data, quantity: 1 }]);
    }
  };

  return (
    <CountContext.Provider value={{ wishlist, AddToWishlist, basket, AddToBasket }}>
      {children}
    </CountContext.Provider>
    //      <CountContext.Provider value={{ basket, SetBasket }}>
    //     {children}
    //   </CountContext.Provider>
  );
};

export default CountProvider;
