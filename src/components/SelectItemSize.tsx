import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const SelectItemSize = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <View>
      {/* Label for size selection */}
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-semibold text-black`}>Select size</Text>
        <TouchableOpacity>
          <Text style={tw`text-gray-800 text-sm`}>Size Guide</Text>
        </TouchableOpacity>
      </View>

      {/* Size options */}
      <View style={tw`flex-row items-center`}>
        {sizes.map((size, index) => (
          <React.Fragment key={size}>
            {/* Touchable size button */}
            <TouchableOpacity
              onPress={() => setSelectedSize(size)}
              style={tw`px-3 py-2 mr-2 rounded-2 border ${
                selectedSize === size ? "border-black" : "border-gray-300"
              }`}
            >
              <Text
                style={tw.style(
                  "text-sm",
                  selectedSize === size ? "text-black" : "text-gray-400"
                )}
              >
                {size}
              </Text>
            </TouchableOpacity>

            {/* Dotted separator (for all except the last size) */}
            {/* {index < sizes.length - 1 && (
              <Text style={tw`text-gray-400 mx-1`}>•</Text>
            )} */}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

export default SelectItemSize;
