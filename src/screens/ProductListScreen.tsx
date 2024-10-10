import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getProducts } from "../features/firebase/product";
import ProductContext from "../features/context/productContext";
import tw from "twrnc";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ProductItem from "./ProductItem";
import { ScrollView } from "react-native-gesture-handler";

const ProductListScreen = ({ navigation }) => {
  const { products, setProducts } = useContext(ProductContext);

  const goBack = () => {
    navigation.goBack();
  };

  const fetchAllProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Products",
      headerLeft: () => (
        <Pressable
          onPress={goBack}
          style={tw`justify-center items-center h-10 w-10 mx-4 rounded-full`}
        >
          <MaterialIcons name="chevron-left" size={34} color={"#111"} />
        </Pressable>
      ),
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleAlign: "center",
    });
    fetchAllProducts();
  }, []);
  return (
    <View style={tw`flex-1 w-full bg-white`}>
      <ScrollView>
        {products?.map((product) => (
          <Pressable
            key={product.id}
            onPress={() =>
              navigation.navigate("detail-screen", {
                productId: product?.id,
              })
            }
          >
            <ProductItem
              title={product?.title}
              image={product?.image}
              price={product?.price}
              brand={product?.brand}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductListScreen;
