import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import OfferCard from "../components/OfferCard";
import { getProducts } from "../features/firebase/product";
import ProductContext from "../features/context/productContext";
import AuthenticationModal from "../components/AuthenticationModal";
import { useNavigation } from "@react-navigation/native";
import CategoryCard from "../components/CategoryCard";
import Searchbar from "../components/Searchbar";
import UserLogo from "../../assets/user.png";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { products, setProducts } = useContext(ProductContext);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchAllProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    fetchAllProducts();
  }, []);

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

          {/* Optionally: Login Button on the right side */}

          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={tw`flex-row justify-center items-center border border-slate-400 rounded-full`}
          >
            <Image source={UserLogo} style={tw`h-12 w-12`} />
            <Text style={tw`font-semibold py-2 pr-4 pl-2`}>Login</Text>
          </Pressable>
        </View>

        {/* Search Bar */}
        <Searchbar />

        {/* Offer Card */}
        <View style={tw`mt-6 p-5`}>
          <OfferCard line1={"Upto"} line2={"50% OFF"} line3={"Shop Now"} />
        </View>

        {/* Category Cards */}
        <View style={tw`mt-4`}>
          <View style={tw`flex-row justify-between items-center px-5`}>
            <Text style={tw`text-lg font-extrabold`}>Categories</Text>
          </View>

          <View style={tw`mt-5 ml-5 mr-5 mb-5`}>
            {/* Men Category */}
            <CategoryCard
              title="Men"
              onPress={() => navigation.navigate("Men")}
            />

            {/* Women Category */}
            <CategoryCard
              title="Women"
              onPress={() => navigation.navigate("Women")}
            />

            {/* Kids Category */}
            <CategoryCard
              title="Junior"
              onPress={() => navigation.navigate("Juniors")}
            />
          </View>
        </View>
        <View>
          <AuthenticationModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
