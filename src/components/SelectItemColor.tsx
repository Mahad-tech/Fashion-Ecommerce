import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";

const SelectItemColor = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <View>
      {/* Label */}
      <Text style={tw`text-sm font-semibold text-black mb-2`}>
        Select color
      </Text>

      {/* Color options */}
      <View style={tw`flex-row items-center`}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedColor(color)}
            style={[
              tw`w-10 h-10 rounded-lg m-1 items-center justify-center`,
              { backgroundColor: color },
            ]}
          >
            {selectedColor === color && (
              <MaterialIcons name="check" size={20} color="black" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SelectItemColor;

const styles = StyleSheet.create({});
