import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderItem from "../components/OrderItem";
import tw from "twrnc";

// Static order data for demonstration purposes
const orders = [
  {
    id: "1",
    brand: "Brand A",
    qty: 2,
    title: "Product 1",
    date: "2024-10-01",
    orderId: "ORD001",
    image: "https://via.placeholder.com/150",
    price: "29.99",
  },
  {
    id: "2",
    brand: "Brand B",
    qty: 1,
    title: "Product 2",
    date: "2024-10-02",
    orderId: "ORD002",
    image: "https://via.placeholder.com/150",
    price: "39.99",
  },
  // Add more orders as needed
];

const OrderScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 w-full p-5 bg-white`}>
      <View>
        <Text style={tw`font-bold text-xl ml-4`}>My Orders</Text>
      </View>
      <ScrollView style={tw`mt-4 pt-4`} showsVerticalScrollIndicator={false}>
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            brand={order.brand}
            qty={order.qty}
            title={order.title}
            date={order.date}
            orderId={order.orderId}
            image={order.image}
            price={order.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderScreen;
