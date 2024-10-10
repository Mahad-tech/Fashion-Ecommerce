import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const CategoryCard = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={tw`max-w-[800px] h-[200px] mb-5 overflow-hidden bg-[#c7c7c7] rounded-2xl justify-center items-center`}
      >
        <View style={tw`flex-1 justify-center items-center`}>
          {/* Center text */}
          <Text style={tw`font-extrabold text-2xl`}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
