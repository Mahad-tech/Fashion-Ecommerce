import { Pressable, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import tw from "twrnc";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const CategoryCard = ({ onPress, imageSource }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={tw`max-w-[800px] h-[200px] mb-5 overflow-hidden bg-[#c7c7c7] rounded-2xl justify-center items-center`}
      >
        <View style={tw`flex-1 justify-center items-center`}>
          <Image
            source={imageSource}
            style={{ width: width * 0.92, height: width * 1.0 * 0.52 }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
