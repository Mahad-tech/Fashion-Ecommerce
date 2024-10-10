import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import OrderItem from "../components/OrderItem";
import { getAllOrderItems } from "../features/firebase/order";
import OrderContext from "../features/context/orderContext";
import AuthContext from "../features/context/authContext";
import tw from "twrnc";

const OrderScreen = ({ navigation }) => {
  const { orders, setOrders } = useContext(OrderContext);
  const { isLoggedIn } = useContext(AuthContext);

  const fetchAllOrders = async () => {
    const res = await getAllOrderItems();
    if (res.success === true) {
      setOrders(res.data);
      console.log("res.data", res.data);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    fetchAllOrders();
  }, []);
  return (
    <SafeAreaView style={tw`flex-1 w-full p-5 bg-white`}>
      <View>
        <Text style={tw`font-bold text-xl ml-4`}>My Orders</Text>
      </View>
      {isLoggedIn ? (
        <ScrollView style={tw`mt-4 pt-4`} showsVerticalScrollIndicator={false}>
          {orders?.map((order) => (
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
      ) : (
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`font-bold text-lg`}>Login to view your Orders!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;
