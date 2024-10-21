import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import tw from "twrnc"; // Tailwind CSS for React Native

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  isError = false, // Provide default values for props
  secureTextEntry = false,
  inputStyle = {},
  containerStyle = {},
  labelStyle = {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelTranslateY = useSharedValue(0);

  // Define the animated style for the label
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: labelTranslateY.value }],
      fontSize: isFocused || value.length > 0 ? 12 : 14,
    };
  });

  // Animate label when focused
  const handleFocus = () => {
    setIsFocused(true);
    labelTranslateY.value = withTiming(-20, { duration: 300 });
  };

  // Animate label when blurred
  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
      labelTranslateY.value = withTiming(0, { duration: 300 });
    }
  };

  return (
    <View style={[tw`mb-5 relative`, containerStyle]}>
      <Animated.Text
        style={[
          tw`absolute text-gray-400`,
          animatedStyle,
          {
            bottom: 10,
          },
          labelStyle,
        ]}
      >
        {label}
      </Animated.Text>
      <TextInput
        style={[tw`text-black border-b mt-6`, tw`border-gray-400`, inputStyle]}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor="transparent"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FloatingLabelInput;
