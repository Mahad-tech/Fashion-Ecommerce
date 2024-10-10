import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const NewArrivalsCard = ({ title, brand, image, price }) => {
  return (
    <View
      style={tw`max-w-[150px] justify-center items-center overflow-hidden mr-6`}
    >
      <Image source={{ uri: image }} style={tw`rounded-xl h-36 w-32`} />
      <View style={tw`mt-2 justify-center items-center`}>
        <Text style={tw`text-xs`}>{title}</Text>
        <Text style={tw`text-xs`}>{brand}</Text>
        <Text style={tw`font-extrabold`}>RS{price}</Text>
      </View>
    </View>
  );
};

export default NewArrivalsCard;

const styles = StyleSheet.create({});
