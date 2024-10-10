import { StyleSheet, Text, View, Pressable, ToastAndroid } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import CartContext from "../features/context/cartContext";
import OrderContext from "../features/context/orderContext";
import { addToOrders } from "../features/firebase/order";

const TotalSummaryCard = ({ total }) => {
  const { setCartItems } = useContext(CartContext);
  const { setOrders } = useContext(OrderContext);

  const placeOrder = async () => {
    const res = await addToOrders();
    if (res?.success === true) {
      ToastAndroid.show("Order Placed Successfully!", ToastAndroid.BOTTOM);
      setCartItems([]);
      setOrders(res.data);
    }
  };
  return (
    <View style={tw`border border-gray-200 rounded-lg p-6`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`font-bold text-lg`}>Total Price</Text>
        <Text style={tw`font-extrabold text-xl`}>Rs {total}</Text>
      </View>
      <Pressable onPress={placeOrder} style={tw`bg-black py-6 rounded-lg mt-6`}>
        <Text style={tw`font-semibold text-white text-center`}>
          Place Order
        </Text>
      </Pressable>
    </View>
  );
};

export default TotalSummaryCard;

const styles = StyleSheet.create({});
