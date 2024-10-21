import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  Text,
  ScrollView,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Google from "../../assets/Google.png";
import Apple from "../../assets/Apple.png";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  }, [navigation]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleCreateAccount = () => {
    if (!email || !password || !name) {
      Alert.alert("Error", "All mandatory fields must be filled");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert("Error", "Please enter a valid email address");
    } else {
      Alert.alert("Success", "Account created");
    }
  };

  return (
    <ScrollView style={tw`flex-1 bg-white p-5`}>
      <Text style={tw`text-lg text-black mb-5`}>PERSONAL DETAILS</Text>
      <FloatingLabelInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        isError={!email}
        secureTextEntry={undefined}
      />
      <FloatingLabelInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        isError={!password}
        secureTextEntry={true}
      />
      <FloatingLabelInput
        label="Name"
        value={name}
        onChangeText={setName}
        isError={!name}
        secureTextEntry={undefined}
      />
      <FloatingLabelInput
        label="Surname"
        value={surname}
        onChangeText={setSurname}
        isError={undefined}
        secureTextEntry={undefined}
      />
      {/* Uncomment if you want to include a checkbox for subscriptions */}
      <View style={tw`flex-row items-center mb-5`}>
        <Checkbox
          style={{ height: 15, width: 15 }}
          value={isSubscribed}
          onValueChange={setIsSubscribed}
          color={"black"}
        />
        <Text style={tw`text-black text-xs ml-2`}>
          I would like to receive the latest news from UNIQUE by email
        </Text>
      </View>
      <TouchableOpacity
        style={tw`bg-black p-2 rounded items-center`}
        onPress={handleCreateAccount}
      >
        <Text style={tw`text-white text-sm`}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      {/* Separator text */}
      <View style={tw`flex-row items-center my-4`}>
        <View style={tw`flex-1 h-px bg-gray-300`} />
        <Text style={tw`text-gray-500 text-lg mx-3`}>OR</Text>
        <View style={tw`flex-1 h-px bg-gray-300`} />
      </View>
      {/* Sign up with Google and Apple buttons */}
      <View>
        <TouchableOpacity
          style={tw`flex-row items-center justify-center border border-gray-300 p-3 rounded-full mb-3`}
          onPress={() => Alert.alert("Sign up with Google")}
        >
          <Image
            source={Google}
            style={{ width: 26, height: 26, marginRight: 8 }}
          />
          <Text style={tw`text-black text-base`}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-2`}>
        <TouchableOpacity
          style={tw`flex-row items-center justify-center border border-gray-300 p-3 rounded-full items-center`}
          onPress={() => Alert.alert("Sign up with Apple")}
        >
          <Image
            source={Apple}
            style={{ width: 26, height: 26, marginRight: 8 }}
          />
          <Text style={tw`text-black text-base`}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;
