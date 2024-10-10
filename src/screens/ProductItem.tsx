import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const ProductItem = ({ title, image, brand, price }) => {
  return (
    <View
      style={tw` bg-white justify-center items-center rounded-lg w-full mb-4 mt-2 border-slate-400 `}
    >
      <View style={tw`flex-row items-center justify-center mx-4 mt-2 mb-2`}>
        <View>
          <Image
            source={{ uri: image }}
            style={tw`rounded-xl h-20 w-20 `}
            resizeMode="contain"
          />
        </View>
        <View style={tw`flex-1 w-[100%] p-2`}>
          <View>
            <Text style={tw`font-bold`}>{title}</Text>
            <Text style={tw`text-xs`}>{brand}</Text>
          </View>
          <View style={tw`mt-2`}>
            <Text style={tw`text-xs`}>Price: Rs {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
