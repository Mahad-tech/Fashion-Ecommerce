import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";

const Searchbar = () => {
  return (
    <View style={tw`mt-6 mx-5`}>
      <View style={tw`flex-row bg-gray-200 p-2 px-3 items-center rounded-xl`}>
        <MaterialIcons name="search" size={24} color="black" />
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#666666"
          style={tw`px-2`}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
