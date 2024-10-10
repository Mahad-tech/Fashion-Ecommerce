import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import tw from "twrnc";

const ProductCard = ({ image, name, price, onPress }) => {
  return (
    <Pressable onPress={onPress} style={tw`mb-6`}>
      <View style={tw`w-[185px] h-[240px] bg-white rounded-xl  p-2`}>
        {/* Product Image */}
        <Image
          source={image}
          style={tw`w-full h-[200px] rounded-lg`}
          resizeMode="cover"
        />

        {/* Product Details */}
        <View style={tw`mt-2 ml-2`}>
          <Text style={tw`text-sm font-semibold text-black`}>{name}</Text>
          <Text>
            <Text style={tw`text-sm text-gray-600`}>$</Text>
            <Text style={tw`text-sm text-gray-600 font-bold`}>{price}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
