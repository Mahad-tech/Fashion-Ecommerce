import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Rating from "../components/Rating";
import SelectItemColor from "../components/SelectItemColor";
import SelectItemSize from "../components/SelectItemSize";

const DetailScreen = ({ navigation, route }) => {
  const sizes = ["32", "34", "36", "38", "40"];
  const colors = ["#FDEEDC", "#FCE2DB", "#FFF1C1", "#FFD79D", "#D6E3FF"];
  const products = [
    {
      id: "1",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 1",
      brand: "Brand A",
      description: "This is a description for Product 1.",
      price: "2999",
    },
    {
      id: "2",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 2",
      brand: "Brand B",
      description: "This is a description for Product 2.",
      price: "3999",
    },
    {
      id: "3",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 3",
      brand: "Brand C",
      description: "This is a description for Product 3.",
      price: "4999",
    },
    {
      id: "4",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 4",
      brand: "Brand D",
      description: "This is a description for Product 4.",
      price: "5999",
    },
    {
      id: "5",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 5",
      brand: "Brand E",
      description: "This is a description for Product 5.",
      price: "6999",
    },
    {
      id: "6",
      image: require("../../assets/Main-Cover.jpg"),
      title: "Product 6",
      brand: "Brand F",
      description: "This is a description for Product 6.",
      price: "7999",
    },
  ];

  const id = route.params?.productId || ""; // Get the product ID from route params
  const product = products.find((item) => item.id === id); // Find the product by ID

  const [qty, setQty] = useState(1);

  const increment = () => {
    setQty((prev) => prev + 1);
  };

  const decrement = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <ScrollView>
        {/* Top Image and Back Button */}
        <View style={tw`bg-black w-full`}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={tw`mt-2 absolute z-10 top-4 justify-center items-center h-10 w-10 mx-4 rounded-full bg-black`}
          >
            <MaterialIcons name="chevron-left" size={34} color={"#fff"} />
          </Pressable>

          {/* Ensure the image URI exists */}
          <Image
            source={
              product?.image || { uri: "https://via.placeholder.com/470" }
            }
            style={tw`h-[470px] w-full`}
            resizeMode="cover"
          />
        </View>

        {/* Product Details */}
        <View style={tw`rounded-[30px] bg-white mt-[-20px] p-5`}>
          <View>
            {/* Product Title and Brand */}
            <View style={tw`flex-row justify-between`}>
              <View>
                <Text style={tw`font-extrabold text-lg mb-2`}>
                  {product?.title || "Unknown Product"}
                </Text>
                <Rating />
              </View>

              {/* Quantity Selector */}
              <View>
                <View style={tw`flex-row justify-center items-center`}>
                  <Pressable
                    onPress={decrement}
                    style={tw`px-3 py-1 bg-gray-300 border border-gray-300 rounded-tl-lg rounded-bl-lg`}
                  >
                    <Text style={tw`font-semibold`}>-</Text>
                  </Pressable>

                  <Text style={tw`bg-white px-2 py-1 border border-gray-300`}>
                    {qty} {/* Display the quantity */}
                  </Text>

                  <Pressable
                    onPress={increment}
                    style={tw`px-3 py-1 bg-gray-300 border border-gray-300 rounded-tr-lg rounded-br-lg`}
                  >
                    <Text style={tw`font-semibold`}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Product Description */}
            <View style={tw`mt-6`}>
              <View>
                <Text style={tw`text-gray-500 text-xs`}>
                  {product?.description ||
                    "No description available for this product."}
                </Text>
              </View>
            </View>

            <View style={tw`mt-6`}>
              <SelectItemColor colors={colors} />
            </View>

            <View style={tw`mt-4`}>
              <SelectItemSize sizes={sizes} />
            </View>

            <View style={tw` w-full px-1`}>
              <View style={tw`flex-row justify-between items-center mt-8`}>
                <View>
                  <Text style={tw`text-black text-sm font-semibold`}>
                    Total Price
                  </Text>
                  <Text style={tw`font-bold text-sm`}>
                    RS{" "}
                    {product?.price
                      ? `${(parseFloat(product.price) * qty).toFixed(2)}`
                      : "N/A"}
                  </Text>
                </View>

                <View style={tw`flex-row justify-between items-center mr-18`}>
                  <View style={tw`flex-1`} />
                  <Pressable
                    // Implement Add to Cart logic here
                    style={tw`items-center bg-black px-6 py-3 rounded-2xl`}
                  >
                    <Text style={tw`text-white font-semibold`}>
                      Add to Cart
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Total Price and Add to Cart Button */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
