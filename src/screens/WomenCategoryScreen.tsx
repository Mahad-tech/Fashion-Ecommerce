import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Searchbar from "../components/Searchbar";
import ScreensCategories from "../components/ScreensCategories";
import ProductCard from "../components/ProductCard";
import PopularItems from "../components/PopularItems";

const WomenCategoryScreen = () => {
  const navigation = useNavigation();

  const products = [
    {
      id: "1",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 1",
      price: "29.99",
    },
    {
      id: "2",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 2",
      price: "39.99",
    },
    {
      id: "3",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 3",
      price: "49.99",
    },
    {
      id: "4",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 4",
      price: "59.99",
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

  const Popularproducts = [
    {
      id: "1",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 1",
      price: "2999",
    },
    {
      id: "2",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 2",
      price: "3999",
    },
    {
      id: "3",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 3",
      price: "4999",
    },
    {
      id: "4",
      image: require("../../assets/Main-Cover.jpg"),
      name: "Product 4",
      price: "5999",
    },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />

        {/* Header */}
        <View
          style={tw`relative flex-row px-5 mt-6 justify-between items-center`}
        >
          {/* Drawer Icon */}
          <Pressable
            style={tw`justify-center items-center rounded-full w-10 h-10`}
            onPress={() => navigation.openDrawer()}
          >
            <MaterialIcons name="menu" size={24} color={"#808080"} />
          </Pressable>

          {/* Brand Name */}
          <View
            style={[
              tw`absolute left-0 right-0`,
              { alignItems: "center", zIndex: -1 },
            ]}
          >
            <Text style={[tw`font-bold text-2xl`]}>UNIQUE</Text>
          </View>
        </View>

        {/* Search Bar */}
        <Searchbar />

        {/* Popular Items */}

        <View style={tw`px-6 mt-4`}>
          <Text style={tw`text-lg font-bold`}>Most Popular</Text>
        </View>

        <ScrollView
          style={tw`flex-row ml-5 mb-3  `}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {Popularproducts.map((product, index) => (
            <PopularItems
              key={index}
              image={product.image}
              name={product.name}
              onPress={() =>
                navigation.navigate("detail-screen", { productId: product.id })
              }
            />
          ))}
        </ScrollView>

        <View>
          <View style={tw`flex-row justify-between items-center px-2`}>
            <ScreensCategories />
          </View>
        </View>
        <View style={tw`flex-row flex-wrap justify-between m-5`}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              onPress={() =>
                navigation.navigate("detail-screen", { productId: product.id })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WomenCategoryScreen;

const styles = StyleSheet.create({});
