import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect } from "react";
import tw from "twrnc";
import User from "../../assets/user.png";
import AuthContext from "../features/context/authContext";
import { logout } from "../features/firebase/userAuth";

const ProfileScreen = ({ navigation }) => {
  const { currentUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    const res = await logout();
    if (res.success === true) {
      ToastAndroid.show("Logged Out Successfully", ToastAndroid.BOTTOM);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Profile",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={tw`bg-white h-full p-6 justify-between`}>
      <View>
        <View style={tw`mt-16 justify-center items-center`}>
          <View style={tw`border border-slate-200 rounded-lg`}>
            <Image source={User} style={tw`h-32 w-32 `} />
          </View>
        </View>
        <View style={tw`mt-6`}>
          {isLoggedIn ? (
            <View style={tw`items-center justify-center`}>
              <Text style={tw`text-lg font-bold`}>
                {currentUser?.name || "John Doe"}
              </Text>
              <Text style={tw`text-xs font-bold text-gray-500`}>
                {currentUser?.email || "johndoe@email.com"}
              </Text>
            </View>
          ) : (
            <View style={tw`items-center justify-center`}>
              <Text style={tw`text-lg font-bold`}>
                Login To See Your Profile
              </Text>
            </View>
          )}
        </View>
      </View>

      {isLoggedIn && (
        <View style={tw`justify-center items-center`}>
          <Pressable
            style={tw`bg-black w-full py-4 rounded-lg`}
            onPress={handleLogout}
          >
            <Text style={tw`font-bold text-white text-center`}>Log Out</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
