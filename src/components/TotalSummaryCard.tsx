import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import tw from "twrnc";
import { PanGestureHandler } from "react-native-gesture-handler";

const TotalSummaryCard = ({ total }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [isCheckedOut, setIsCheckedOut] = useState(false); // State to track checkout status
  const swipeProgress = new Animated.Value(0); // Track swipe progress

  const applyDiscount = () => {
    // Discount logic
  };

  const handleCheckout = () => {
    // Handle the checkout process
    setIsCheckedOut(true); // Set the checkout status to true
    console.log("Checkout initiated");
  };

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationX: swipeProgress } }],
    { useNativeDriver: false } // Set this to false because we are animating color
  );

  const handleGestureEnd = (event) => {
    // If swipe distance is more than a threshold, trigger checkout
    if (event.nativeEvent.translationX > 150) {
      handleCheckout();
    }
    // Reset the progress if swipe is not sufficient
    Animated.timing(swipeProgress, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false, // Reset color gradually
    }).start();
  };

  // Interpolating swipeProgress to change button background color
  const backgroundColor = isCheckedOut
    ? "rgb(211, 211, 211)" // Stay black if checkout is initiated
    : swipeProgress.interpolate({
        inputRange: [0, 150], // From 0px to 150px swipe
        outputRange: ["rgb(0, 0, 0)", "rgb(211, 211, 211)"],
        extrapolate: "clamp", // Prevent it from going beyond the bounds
      });

  return (
    <View style={tw`w-full p-4 bg-white rounded-lg mt-6 shadow-lg`}>
      {/* Discount Code Input */}
      <View
        style={tw`flex-row justify-between items-center mb-4 bg-gray-100 rounded-lg p-2`}
      >
        <TextInput
          style={tw`flex-1 text-gray-500`}
          placeholder="Enter Discount Code"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity
          onPress={applyDiscount}
          style={tw`bg-black p-2 rounded-lg ml-2`}
        >
          <Text style={tw`text-white`}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Subtotal and Total */}
      <View style={tw`flex-row justify-between mb-2`}>
        <Text style={tw`text-gray-500`}>Subtotal</Text>
        <Text style={tw`text-gray-700`}>${total}</Text>
      </View>
      <View style={tw`flex-row justify-between mb-4`}>
        <Text style={tw`text-gray-500`}>Total</Text>
        <Text style={tw`text-gray-700 font-bold`}>${total}</Text>
      </View>

      {/* Swipe to Checkout */}
      <PanGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={handleGestureEnd}
      >
        <Animated.View style={[tw`p-4 rounded-lg`, { backgroundColor }]}>
          <Text style={tw`text-white text-center font-bold`}>
            Swipe to Checkout
          </Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default TotalSummaryCard;
