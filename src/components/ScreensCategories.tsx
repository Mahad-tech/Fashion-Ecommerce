import { View, Text, Pressable, Dimensions } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import tw from "twrnc";
import RBSheet from "react-native-raw-bottom-sheet";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";

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

  const categoryWidth = 120; // Approximate width of each category item
  const translateX = useSharedValue(0);

  // Start automatic scrolling
  const startAutoScroll = () => {
    const totalWidth = categoryWidth * categories.length;

    translateX.value = withRepeat(
      withTiming(-totalWidth, {
        duration: totalWidth * 20, // Adjust speed by changing the duration
        easing: Easing.linear,
      }),
      -1, // Infinite loop
      false // No reverse animation
    );
  };

  // Stop automatic scrolling
  const stopAutoScroll = () => {
    cancelAnimation(translateX); // Stop the current animation
  };

  useEffect(() => {
    startAutoScroll(); // Start the scrolling on mount

    return () => stopAutoScroll(); // Clean up animation on unmount
  }, [categories.length, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const renderCategory = (category, index) => (
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
  );

  return (
    <View style={tw`my-1`}>
      {/* Header with "Categories" and "View all" */}
      <View style={tw`flex-row justify-between px-4 mb-3`}>
        <Text style={tw`text-lg font-bold`}>Categories</Text>
        <Pressable onPress={() => refRBSheet.current.open()}>
          <Text style={tw`text-sm mt-1 text-black`}>View all</Text>
        </Pressable>
      </View>

      {/* Bottom Sheet */}
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

      {/* Scrollable Categories with Continuous and Manual Scroll */}
      <View style={tw`overflow-hidden`}>
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={() => stopAutoScroll()}
          onScrollEndDrag={() => startAutoScroll()} // Resume auto scroll after user interaction ends
          contentContainerStyle={tw`flex-row`}
        >
          <Animated.View style={[tw`flex-row`, animatedStyle]}>
            {categories.map((category, index) =>
              renderCategory(category, index)
            )}
            {categories.map((category, index) =>
              renderCategory(category, index)
            )}
            {/* Duplicate to create an infinite scroll effect */}
          </Animated.View>
        </Animated.ScrollView>
      </View>
    </View>
  );
};

export default ScreensCategories;
