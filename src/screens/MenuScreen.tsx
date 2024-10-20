import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Man");
  const navigation = useNavigation();

  // Subcategories for Men, Women, and Kids
  const subcategories = {
    Man: [
      "#SELECTEDBY",
      "EVENING",
      "/// NEW",
      "JACKETS",
      "PUFFERS",
      "COATS | TRENCH COATS",
      "LEATHER",
      "SWEATERS | CARDIGANS",
      "TROUSERS",
      "JEANS",
      "GILETS",
      "HOODIES | SWEATSHIRTS",
      "T-SHIRTS",
      "SHIRTS",
      "SUITS",
      "TRACKSUITS",
      "OVERSHIRTS",
    ],
    Woman: [
      "NEW IN",
      "DRESSES",
      "TOPS",
      "BLOUSES",
      "JACKETS",
      "PUFFERS",
      "COATS",
      "LEATHER JACKETS",
      "KNITWEAR",
      "TROUSERS",
      "JEANS",
      "SHIRTS",
      "SUITS",
      "SKIRTS",
      "BAGS",
    ],
    Kids: [
      "NEW IN",
      "BABY",
      "BOYS",
      "GIRLS",
      "JACKETS",
      "HOODIES",
      "SWEATSHIRTS",
      "T-SHIRTS",
      "TROUSERS",
      "SHOES",
      "ACCESSORIES",
    ],
  };

  return (
    <View style={tw`flex-1 bg-black`}>
      {/* Top Navigation */}
      <View style={tw`flex-row mt-34 py-5 px-5 border-b border-gray-500`}>
        <TouchableOpacity onPress={() => setSelectedCategory("Man")}>
          <Text
            style={tw`${
              selectedCategory === "Man"
                ? "text-white font-bold pb-1"
                : "text-gray-400 font-normal"
            } text-lg mx-4`}
          >
            MAN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory("Woman")}>
          <Text
            style={tw`${
              selectedCategory === "Woman"
                ? "text-white font-bold pb-1"
                : "text-gray-400 font-normal"
            } text-lg mx-4`}
          >
            WOMAN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedCategory("Kids")}>
          <Text
            style={tw`${
              selectedCategory === "Kids"
                ? "text-white font-bold pb-1"
                : "text-gray-400 font-normal"
            } text-lg mx-4`}
          >
            JUNIORS
          </Text>
        </TouchableOpacity>
      </View>

      {/* Subcategories List */}
      <ScrollView style={tw`flex-1 px-5 mt-5`}>
        {subcategories[selectedCategory].map((item, index) => (
          <TouchableOpacity key={index} style={tw`py-3`}>
            <Text style={tw`text-white text-base`}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Search Bar */}

      <View style={tw`p-5`}>
        <TouchableOpacity onPress={() => navigation.navigate("search-screen")}>
          <View>
            <Text
              style={tw`text-right bg-black text-white py-2 px-4 border border-gray-500`}
            >
              SEARCH
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;
