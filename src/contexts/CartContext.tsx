import { createContext, ReactNode, useState } from "react";

export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
};

type CartContextType = {
  ordres: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType>({
  ordres: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [ordres, setOrdres] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setOrdres((prevState) => [...prevState, item]);
  };

  const removeFromCart = (item: Item) => {
    const index = ordres.findIndex((order) => order.id === item.id);
    if (index !== -1) {
      setOrdres((prevOrders) => {
        const newOrders = [...prevOrders];
        newOrders.splice(index, 1);
        return newOrders;
      });
    }
  };

  const pricesOfItems = ordres.map((item) => item.price);

  const totalPrice = pricesOfItems.reduce((acc, price) => acc + price, 0);

  return (
    <CartContext.Provider
      value={{ ordres, addToCart, removeFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
