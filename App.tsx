import React, { useState } from "react";
import { ProductProvider } from "./src/features/context/productContext";
import TabNavigator from "./src/navigations/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { CartProvider } from "./src/features/context/cartContext";
import { AuthProvider } from "./src/features/context/authContext";
import { OrderProvider } from "./src/features/context/orderContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  const [orders, setOrders] = useState(null);
  return (
    <AuthProvider
      value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
    >
      <ProductProvider
        value={{ products, setProducts, currentProduct, setCurrentProduct }}
      >
        <CartProvider value={{ cartItems, setCartItems }}>
          <OrderProvider value={{ orders, setOrders }}>
            <NavigationContainer>
              <TabNavigator />
            </NavigationContainer>
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
