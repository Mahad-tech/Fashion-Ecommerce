import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import tw from "twrnc";
import CartItem from "../components/CartItem";
import TotalSummaryCard from "../components/TotalSummaryCard";
import bag from "../../assets/bag.png";

const CartScreen = ({ navigation }) => {
  const [total, setTotal] = useState(0);
  const cartItems = [
    {
      id: "1",
      image: "https://via.placeholder.com/150",
      name: "Product 1",
      brand: "Brand A",
      qty: 2,
      price: "29.99",
    },
    {
      id: "2",
      image: "https://via.placeholder.com/150",
      name: "Product 2",
      brand: "Brand B",
      qty: 1,
      price: "39.99",
    },
  ];

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    calculateTotalAmount();
  }, []);

  const calculateTotalAmount = () => {
    const subTotal = cartItems.reduce(
      (acc, item) => acc + Number(item.price) * item.qty,
      0
    );
    setTotal(subTotal.toFixed(2));
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-white`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={tw`flex-1 mt-10`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`p-4`}
        >
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  brand={item.brand}
                  qty={item.qty}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </>
          ) : (
            <View style={tw`flex-1 justify-center items-center`}>
              <Image source={bag} style={{ height: 130, width: 135 }} />
              <Text style={tw`text-lg font-500 mt-1 text-center`}>
                Your cart is empty
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("home-screen")}
                style={tw`bg-black p-4 rounded-lg border border-black mt-5`}
              >
                <Text style={tw`text-white text-center`}>
                  Explore Categories
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>

        {/* Conditionally render TotalSummaryCard only if there are items */}
        {cartItems.length > 0 && (
          <View style={tw`p-4`}>
            <TotalSummaryCard total={total} />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CartScreen;
