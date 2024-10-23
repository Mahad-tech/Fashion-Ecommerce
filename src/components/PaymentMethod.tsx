// components/ShippingType.js

import React, { useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import RBSheet from "react-native-raw-bottom-sheet";

const PaymentMethod = () => {
  const refRBSheet = useRef();
  return (
    <View>
      <Text style={tw`text-lg font-semibold mt-2`}>Payment Method</Text>
      <View style={tw`bg-gray-100 p-4 rounded-md mb-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <MaterialIcons name="payment" size={20} color="black" />
            <Text style={tw`ml-2 text-sm font-medium`}>Cash On Delivery</Text>
          </View>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Text style={tw`text-blue-500`}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={refRBSheet}
        height={700}
        openDuration={250}
        draggable={true}
        customStyles={{
          container: {
            padding: 16,
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <ScrollView style={tw`flex-1`}>
          <Text style={tw`text-lg font-semibold mb-4`}>
            Choose Payment Method
          </Text>
          {/* Address Options */}
          <TouchableOpacity style={tw`mb-2`}>
            <Text style={tw`text-base text-gray-800`}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`mb-2`}>
            <Text style={tw`text-base text-gray-800`}>
              Office - 2301 Pine Street
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`mb-2`}>
            <Text style={tw`text-base text-gray-800`}>
              Friend's Place - 123 Apple St.
            </Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={tw`mt-4 bg-blue-500 py-2 rounded-md`}
          >
            <Text style={tw`text-center text-white font-semibold`}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </RBSheet>
    </View>
  );
};

export default PaymentMethod;
