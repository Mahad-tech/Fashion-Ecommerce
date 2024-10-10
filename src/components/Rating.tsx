import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc"; // import Tailwind for React Native

const Rating = () => {
  return (
    <View style={tw`flex-row items-center`}>
      {/* Star Icon */}
      <Icon name="star" size={16} color="#FFD700" style={tw`mr-2`} />

      {/* Rating Number */}
      <Text style={tw`text-[16px] font-semibold text-black mr-1`}>4.8</Text>

      {/* Number of ratings */}
      <Text style={tw`text-gray-500`}> (335)</Text>

      {/* Separator */}
      <Text style={tw`mx-2 text-gray-300`}>•</Text>

      {/* Number of reviews */}
      <Text style={tw`text-gray-800`}>212 reviews</Text>
    </View>
  );
};

export default Rating;
