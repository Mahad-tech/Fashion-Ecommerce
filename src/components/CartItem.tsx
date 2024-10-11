import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons for trash
import tw from "twrnc"; // Import twrnc

const CartItem = ({ title, image, price, brand, qty, id }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View
      style={tw`flex-row p-3 bg-white rounded-xl items-center my-1 mx-1 shadow-lg `}
    >
      {/* Image */}
      <Image source={{ uri: image }} style={tw`w-15 h-18 rounded-lg`} />

      {/* Text Content */}
      <View style={tw`flex-1 px-3  mt-3`}>
        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-sm font-semibold`}>{title}</Text>

          <TouchableOpacity style={tw`pl-48`}>
            <Icon name="delete" size={20} color="gray-500" />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 14, color: "#6b7280" }}>{brand}</Text>

        <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-sm font-bold mt-1`}>Rs {price}</Text>

          <View style={tw`flex-row items-center bg-gray-200 rounded-xl ml-35`}>
            <TouchableOpacity
              onPress={decrementQuantity}
              style={tw`bg-gray-200 rounded-xl p-1`}
            >
              <Text style={tw`text-lg ml-1`}>-</Text>
            </TouchableOpacity>

            <Text style={tw`px-3 text-sm`}>{quantity}</Text>

            <TouchableOpacity
              onPress={incrementQuantity}
              style={tw`bg-gray-200 rounded-xl p-1`}
            >
              <Text style={tw`text-lg mr-1`}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Quantity Selector */}
    </View>
  );
};

export default CartItem;
