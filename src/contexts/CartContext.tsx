import { createContext, ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl?: string;
  questions: {
    id: string;
    fieldNumber: number;
    content: string;
  }[];
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
    const newItem = { ...item, id: uuidv4() };

    setOrdres((prevState) => [...prevState, newItem]);
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
      value={{ ordres, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
