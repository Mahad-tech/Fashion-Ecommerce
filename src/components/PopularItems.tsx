import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import tw from "twrnc";

const PopularItems = ({ image, name, onPress }) => {
  return (
    <Pressable onPress={onPress} style={tw`mb-2`}>
      <View style={tw`w-[185px] h-[240px] bg-white rounded-xl  p-2`}>
        {/* Product Image */}
        <Image source={image} style={tw`w-full h-[200px] rounded-lg`} />

        {/* Product Details */}
        <View style={tw`mt-2 ml-4`}>
          <Text style={tw`text-sm font-semibold text-black`}>{name}</Text>
          <Text></Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PopularItems;

const styles = StyleSheet.create({});
