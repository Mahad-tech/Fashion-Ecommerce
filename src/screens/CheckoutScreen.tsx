// CheckoutScreen.js

import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import PaymentMethod from "../components/PaymentMethod";
import DeliveryAddress from "../components/DeliveryAddress";
import ShippingType from "../components/ShippingType";
import OrderSummary from "../components/OrderSummary";

const CheckoutScreen = () => {
  const navigation = useNavigation();

  // Sample order items data
  const orderItems = [
    { name: "Brown Jacket", size: "XL", price: "83.97" },
    { name: "Brown Suite", size: "XL", price: "120.00" },
    { name: "Brown Jacket", size: "XL", price: "83.97" },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`px-4 pb-6`}
        showsVerticalScrollIndicator={false}
      >
        <DeliveryAddress />
        <ShippingType />
        <PaymentMethod />
        <OrderSummary items={orderItems} />
      </ScrollView>

      {/* Continue to Payment Button */}
      <View style={tw`p-4 bg-white`}>
        <TouchableOpacity style={tw`bg-black py-4 rounded-md`}>
          <Text style={tw`text-center text-white font-semibold text-lg`}>
            Confirm Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutScreen;
