// components/OrderSummary.js

import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const OrderSummary = ({ items }) => {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-lg font-semibold mb-2 mt-2`}>Order Summary</Text>

      <View style={tw`bg-gray-100 rounded-lg`}>
        {items.map((item, index) => (
          <View
            key={index}
            style={tw`flex-row justify-between items-center bg-gray-100 p-4 rounded-md mb-2`}
          >
            <View style={tw`flex-row items-center `}>
              <View style={tw`bg-gray-300 w-10 h-10 rounded-md`} />
              <View style={tw`ml-4`}>
                <Text style={tw`text-base text-sm`}>{item.name}</Text>
                <Text style={tw`text-gray-600 text-sm`}>Size: {item.size}</Text>
              </View>
            </View>
            <Text style={tw`text-base font-semibold text-sm`}>
              {item.price}
            </Text>
          </View>
        ))}
      </View>
      <View
        style={tw`flex-row justify-between items-center p-4 mt-5 bg-gray-100 rounded-lg `}
      >
        <View>
          <Text style={tw`text-sm mb-1 `}>Subtotal</Text>
          <Text style={tw`text-sm mb-1 `}>Delivery</Text>
          <Text style={tw`text-lg mb-1 font-semibold`}>Total</Text>
        </View>
        <View>
          <Text style={tw`text-sm mb-1 font-semibold text-right`}>287.94</Text>
          <Text style={tw`text-sm mb-1 font-semibold text-right`}>12.06</Text>
          <Text style={tw`text-lg mb-1 font-semibold text-right`}>300.00</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSummary;
