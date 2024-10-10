// import {
//   Text,
//   View,
//   ScrollView,
//   Pressable,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import React, { useContext, useEffect, useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import CartItem from "../components/CartItem";
// import tw from "twrnc"; // Assuming you're using twrnc for Tailwind in React Native
// import bag from "../../assets/cart.png";

// const CartScreen = ({ navigation }) => {
//   const [total, setTotal] = useState(0); // Set initial total to 0

//   // Dummy cart items data
//   const cartItems = [
//     {
//       id: "1",
//       image: "https://via.placeholder.com/150", // Use a valid image URL
//       name: "Product 1",
//       brand: "Brand A",
//       qty: 2,
//       price: "29.99",
//     },
//     {
//       id: "2",
//       image: "https://via.placeholder.com/150", // Use a valid image URL
//       name: "Product 2",
//       brand: "Brand B",
//       qty: 1,
//       price: "39.99",
//     },
//     // Add more products as needed
//   ];

//   const calculateTotalAmount = () => {
//     const subTotal = (cartItems || []).reduce(
//       (acc, item) => acc + Number(item.price) * Number(item.qty),
//       0
//     );
//     setTotal(subTotal.toFixed(2));
//   };

//   useEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//     calculateTotalAmount();
//   }, [cartItems]);

//   return (
//     <SafeAreaView style={tw`flex-1 bg-white`}>
//       <ScrollView
//         contentContainerStyle={tw`flex-grow justify-center items-center`}
//         showsVerticalScrollIndicator={false}
//       >
//         {cartItems?.length > 0 ? (
//           cartItems.map((item) => (
//             <CartItem
//               key={item.id}
//               id={item.id}
//               title={item.name}
//               brand={item.brand}
//               qty={item.qty}
//               image={item.image}
//               price={item.price}
//             />
//           ))
//         ) : (
//           <View style={tw`justify-center items-center mb-10`}>
//             <Image source={bag} style={{ height: 130, width: 130 }} />
//             <Text
//               style={tw`text-lg font-500 mt-1 justify-center items-center ml-4`}
//             >
//               Your cart is empty
//             </Text>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("home-screen")}
//               style={tw`bg-black p-4 rounded-lg border border-black mt-5 ml-4`}
//             >
//               <Text style={tw`text-white text-center`}>Explore Categories</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default CartScreen;

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import tw from "twrnc"; // Assuming you're using twrnc for Tailwind in React Native
import bag from "../../assets/cart.png";

const CartScreen = ({ navigation }) => {
  const [total, setTotal] = useState(0); // Set initial total to 0
  const cartItems = [
    {
      id: "1",
      image: "https://via.placeholder.com/150", // Use a valid image URL
      name: "Product 1",
      brand: "Brand A",
      qty: 2,
      price: "29.99",
    },
    {
      id: "2",
      image: "https://via.placeholder.com/150", // Use a valid image URL
      name: "Product 2",
      brand: "Brand B",
      qty: 1,
      price: "39.99",
    },
    // Add more products as needed
  ];

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    calculateTotalAmount();
  }, []);

  const calculateTotalAmount = () => {
    const subTotal = (cartItems || []).reduce(
      (acc, item) => acc + Number(item.price) * Number(item.qty),
      0
    );
    setTotal(subTotal.toFixed(2));
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`flex-grow justify-center items-center`}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.name}
              brand={item.brand}
              qty={item.qty}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <View style={tw`justify-center items-center mb-10`}>
            <Image source={bag} style={{ height: 130, width: 130 }} />
            <Text
              style={tw`text-lg font-500 mt-1 justify-center items-center ml-4`}
            >
              Your cart is empty
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("home-screen")}
              style={tw`bg-black p-4 rounded-lg border border-black mt-5 ml-4`}
            >
              <Text style={tw`text-white text-center`}>Explore Categories</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;
