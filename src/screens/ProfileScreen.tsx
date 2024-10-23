import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import FloatingLabelInput from "../components/FloatingLabelInput";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Profile",
    });
  }, [navigation]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (!isLoggedIn) {
    return (
      <ScrollView style={tw`flex-1 bg-gray-100 p-6`}>
        <View style={tw`justify-center`}>
          <Text style={tw`text-black text-center text-xl mb-6`}>
            LOG IN TO YOUR ACCOUNT
          </Text>

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

          <TouchableOpacity style={tw`bg-black rounded-lg p-2 mb-4`}>
            <Text style={tw`text-white text-center text-lg`}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={tw`text-gray-400 text-center mb-6`}>
              Have you forgotten your password?
            </Text>
          </TouchableOpacity>

          {/* Register section */}
          <View style={tw`mt-10`}>
            <Text style={tw`text-black text-center text-lg mb-4`}>
              NEED AN ACCOUNT?
            </Text>
            <TouchableOpacity
              style={tw`bg-black rounded-lg p-2`}
              onPress={() => navigation.navigate("register-screen")}
            >
              <Text style={tw`text-white text-center text-lg`}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView style={tw`flex-1 bg-white`}>
        {/* Profile Info */}
        <View style={tw`flex-row items-center p-4 bg-gray-100 mb-5`}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={tw`w-12 h-12 rounded-full bg-white`}
          />
          <View style={tw`ml-4`}>
            <Text style={tw`text-lg font-semibold text-black`}>
              Mahad Ahmad
            </Text>
            <Text style={tw`text-sm text-gray-500`}>
              mahadahmad2019@gmail.com
            </Text>
          </View>
        </View>

        {/* Menu Options */}
        <View style={tw`mt-2`}>
          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="edit" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>Edit Profile</Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between mt-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="box" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>
                Order History
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between mt-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="map" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>
                Shipping Details
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between mt-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="tag" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>All Coupons</Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between mt-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="lock" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>
                Change Password
              </Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`px-4 py-3 bg-gray-100 flex-row items-center justify-between mt-2`}
          >
            <View style={tw`flex-row items-center`}>
              <Icon name="log-out" size={20} color="black" />
              <Text style={tw`ml-4 text-base text-gray-700`}>Log Out</Text>
            </View>
            <Icon name="chevron-right" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

export default ProfileScreen;
