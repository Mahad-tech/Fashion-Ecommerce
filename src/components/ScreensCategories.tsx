import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import tw from "twrnc";
import RBSheet from "react-native-raw-bottom-sheet";

const ScreensCategories = () => {
  const refRBSheet = useRef();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Dress Shirts",
    "Casual Shirts",
    "Polo Shirts",
    "T-Shirts",
    "Trouser",
    "Dress Pants",
    "Jeans",
    "Cargo",
    "Formal Suits",
    "Blazers",
    "Shalwar Kameez",
    "Waistcoat",
    "Kurta",
    "Sherwani",
  ];

  return (
    <View style={tw`my-1`}>
      {/* Header with "Categories" and "View all" */}
      <View style={tw`flex-row justify-between px-4 mb-3`}>
        <Text style={tw`text-lg font-bold`}>Categories</Text>
        <Pressable onPress={() => refRBSheet.current.open()}>
          <Text style={tw`text-sm mt-1 text-black`}>View all</Text>
        </Pressable>
      </View>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        draggable={true}
        height={720}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <ScrollView style={tw`px-4 py-2`}>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setSelectedCategory(category);
                refRBSheet.current.close();
              }}
              style={tw`mb-3 py-2 border-b border-gray-200 `}
            >
              <Text
                style={tw`text-lg ${
                  selectedCategory === category
                    ? "font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </RBSheet>

      {/* Scrollable Categories */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`px-4`}
      >
        {categories.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategory(category)}
            style={tw`mr-2 px-7 py-2 rounded-4 border ${
              selectedCategory === category
                ? "bg-black border-black"
                : "bg-white border-gray-300"
            }`}
          >
            <Text
              style={tw`text-sm ${
                selectedCategory === category ? "text-white" : "text-black"
              }`}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScreensCategories;
