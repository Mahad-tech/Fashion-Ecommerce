import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import Suit from "../../assets/suit.png";

const OfferCard = ({ line1, line2, line3 }) => {
  return (
    <View
      style={tw`flex-row max-w-[800px] py-2 mr-1 max-h-[160px] overflow-hidden bg-[#c7c7c7] rounded-2xl`}
    >
      <View style={tw`px-5 py-2`}>
        <Text style={tw`text-2xl font-bold`}> {line1} </Text>
        <Text style={tw`font-bold text-2xl`}>{line2}</Text>

        <Pressable
          onPress={() => console.log("Pressed")}
          style={tw`bg-black w-22 rounded-2xl h-10 justify-center items-center mt-3`}
        >
          <Text style={tw`text-white text-xs font-semibold`}>{line3}</Text>
        </Pressable>
      </View>
      <View>
        <Image source={Suit} style={tw`h-[150px] w-[75px] ml-30`} />
      </View>
    </View>
  );
};

export default OfferCard;

const styles = StyleSheet.create({});
