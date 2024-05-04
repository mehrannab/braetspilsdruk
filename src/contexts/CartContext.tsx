import { Snackbar } from "@mui/material";
import { createContext, ReactNode, useCallback, useState } from "react";
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
  snackbarOpen: boolean;
  snackbarMessage: string;
  closeSnackbar: () => void;
};

const CartContext = createContext<CartContextType>({
  ordres: [],
  addToCart: () => {},
  removeFromCart: () => {},
  totalPrice: 0,
  snackbarOpen: false,
  snackbarMessage: "",
  closeSnackbar: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [ordres, setOrdres] = useState<Item[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const addToCart = (item: Item) => {
    const newItem = { ...item, id: uuidv4() };
    setOrdres((prevState) => [...prevState, newItem]);
    setSnackbarMessage("Produktet blev tilføjet til kurven!");
    setSnackbarOpen(true);
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

  const closeSnackbar = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  return (
    <CartContext.Provider
      value={{
        ordres,
        addToCart,
        removeFromCart,
        totalPrice,
        snackbarOpen,
        snackbarMessage,
        closeSnackbar,
      }}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        message={snackbarMessage}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "green",
          },
        }}
      />
    </CartContext.Provider>
  );
}

export default CartContext;
