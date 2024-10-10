import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const OrderItem = ({ orderId, title, image, brand, date, price, qty }) => {
  return (
    <View
      style={tw`bg-white justify-center items-center rounded-lg w-full
     mb-2 border border-slate-200`}
    >
      <View style={tw`flex-row justify-center items-center`}>
        <View style={tw`p-2 items-center justify-center`}>
          <Image
            source={{ uri: image }}
            style={tw`rounded-xl h-24 w-24 object-contain`}
          />
        </View>
        <View
          style={tw`flex-1 flex-row  justify-between items-center w-[100%] pl-2`}
        >
          <View>
            <Text style={tw`font-bold`}>{title}</Text>
            <Text style={tw`text-xs mt-1`}>{brand}</Text>
            <Text style={tw`text-xs`}>Quantity: {qty}</Text>
            <Text style={tw`text-xs`}>Date: {date}</Text>
            <Text style={tw`text-xs`}>
              OrderId: <Text style={tw`font-semibold`}>#{orderId}</Text>
            </Text>
          </View>
          <View style={tw`flex-row  px-3 h-8 justify-center items-center`}>
            <Text style={tw`font-extrabold`}>${price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {},
  shadowProp: {
    shadowColor: "#111",
    elevation: 6,
    shadowRadius: 20,
  },
});
