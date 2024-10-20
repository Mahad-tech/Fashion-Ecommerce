import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import PopularItems from "../components/PopularItems";
import ScreensCategories from "../components/ScreensCategories";

const SearchScreen = () => {
  const navigation = useNavigation();
  const categories = [
    "Animal print",
    "Black dress",
    "Long dress",
    "Smart tops",
    "Animal print",
    "Black dress",
    "Long dress",
    "Smart tops",
    "Animal print",
    "Black dress",
    "Long dress",
    "Smart tops",
    "Animal print",
    "Black dress",
    "Long dress",
    "Smart tops",
  ];

  const products = [
    {
      id: "1",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 1",
      price: "5999",
    },
    {
      id: "2",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 2",
      price: "6999",
    },
    {
      id: "3",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 3",
      price: "7999",
    },
    {
      id: "4",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 4",
      price: "5999",
    },
    {
      id: "5",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 5",
      price: "6999",
    },
    {
      id: "6",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 6",
      price: "7999",
    },
  ];

  const popular_products = [
    {
      id: "1",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 1",
      price: "5999",
    },
    {
      id: "2",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 2",
      price: "6999",
    },
    {
      id: "3",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 3",
      price: "7999",
    },
    {
      id: "4",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 4",
      price: "5999",
    },
    {
      id: "5",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 5",
      price: "6999",
    },
    {
      id: "6",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 6",
      price: "7999",
    },
  ];

  const textInputRef = useRef(null);
  const categoryWidth = 80;
  const translateX = useSharedValue(0);

  useEffect(() => {
    const totalWidth = categoryWidth * categories.length;

    // Set up continuous scrolling
    translateX.value = withRepeat(
      withTiming(-totalWidth, {
        duration: totalWidth * 15,
      }),
      -1, // Infinite loop
      false // Do not reverse
    );

    // Focus the TextInput when the component mounts
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, [categories.length, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const renderCategory = (category, index) => (
    <TouchableOpacity
      key={index}
      style={tw`bg-white border border-gray-600 py-1 px-2 rounded-lg mr-3`}
    >
      <Text style={tw`text-black text-sm`}>{category}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={tw`flex-1 bg-white pt-5`}>
      {/* Header */}
      <View style={tw`px-4 mt-10`}>
        <Text style={tw`text-black text-xl text-center mb-3`}>
          What are you looking for?
        </Text>
        <TextInput
          ref={textInputRef}
          style={tw`bg-gray-100 text-white rounded-lg py-2 px-4 text-left`}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      {/* Categories */}
      <View style={tw`mt-5`}>
        <ScreensCategories />
      </View>

      {/* Products */}

      <View>
        <Text style={tw`text-black text-lg font-bold mt-5 px-4`}>
          Most Popular Items
        </Text>
      </View>

      <ScrollView
        style={tw`flex-row ml-5 mb-3`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {popular_products.map((product) => (
          <PopularItems
            key={product.id} // Use product.id as the unique key
            image={product.image}
            name={product.name}
            onPress={() =>
              navigation.navigate("detail-screen", { productId: product.id })
            }
          />
        ))}
      </ScrollView>

      <View>
        <Text style={tw`text-black text-lg font-bold mt-5 px-4`}>
          You Might Be Interested In
        </Text>

        <View style={tw`flex-row flex-wrap justify-between m-5`}>
          {products.map((product) => (
            <ProductCard
              key={product.id} // Use product.id as the unique key
              image={product.image}
              name={product.name}
              price={product.price}
              onPress={() =>
                // navigation.navigate("detail-screen", { productId: product.id })
                console.log("hello world")
              }
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
