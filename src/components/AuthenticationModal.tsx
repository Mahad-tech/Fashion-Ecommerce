import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import tw from "twrnc";
import AuthContext from "../features/context/authContext";
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../features/firebase/userAuth";

const AuthenticationModal = ({ modalVisible, setModalVisible }) => {
  const [type, setType] = useState("login"); // 'register' by default
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const handleLogin = async () => {
    setLoading(true);
    const res = await loginWithEmailAndPassword(email, password);
    if (res.success === true) {
      setCurrentUser(res.user);
      setIsLoggedIn(true);
      setModalVisible(false); // Close modal only on successful login
    }
    setLoading(false);
  };

  const handleRegister = async () => {
    setLoading(true);
    const res = await registerWithEmailAndPassword(name, email, password);
    if (res.success === true) {
      setCurrentUser({ name, email });
      setIsLoggedIn(true);
      setModalVisible(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true);
    }
  }, [currentUser]);

  return (
    <View style={tw`flex-1`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <Pressable
          onPress={() => setModalVisible(false)}
          style={tw`flex-1 justify-center items-center bg-black/[0.5]`}
        >
          <View style={tw`w-[80%] p-6 bg-white rounded-lg`}>
            {type === "login" ? (
              <View>
                <Text style={tw`font-bold mb-2 text-lg`}>Email:</Text>
                <TextInput
                  style={tw`border border-gray-300 px-3 py-2`}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <Text style={tw`font-bold mt-4 mb-2 text-lg`}>Password:</Text>
                <TextInput
                  style={tw`border border-gray-300 px-3 py-2`}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={tw`bg-black py-4 mt-6 rounded-lg`}
                  onPress={handleLogin}
                >
                  <Text
                    style={tw`text-white font-semibold text-center text-lg`}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
                <View style={tw`flex-row justify-center items-center mt-4`}>
                  <Text style={tw`text-gray-500`}>Not a User?</Text>
                  <Pressable onPress={() => setType("register")}>
                    <Text style={tw`font-bold`}> Register</Text>
                  </Pressable>
                </View>
                {loading && <ActivityIndicator size="large" />}
              </View>
            ) : (
              <View>
                <Text style={tw`font-bold mb-2 text-lg`}>Name:</Text>
                <TextInput
                  style={tw`border border-gray-300 px-3 py-2`}
                  value={name}
                  onChangeText={setName}
                />
                <Text style={tw`font-bold mb-2 text-lg`}>Email:</Text>
                <TextInput
                  style={tw`border border-gray-300 px-3 py-2`}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <Text style={tw`font-bold mb-2 text-lg`}>Password:</Text>
                <TextInput
                  style={tw`border border-gray-300 px-3 py-2`}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={tw`bg-black py-4 mt-6 rounded-lg`}
                  onPress={handleRegister}
                >
                  <Text
                    style={tw`text-white font-semibold text-center text-lg`}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
                <View style={tw`flex-row justify-center items-center mt-4`}>
                  <Text style={tw`text-gray-500`}>Already a User?</Text>
                  <Pressable onPress={() => setType("login")}>
                    <Text style={tw`font-bold`}> Login</Text>
                  </Pressable>
                </View>
                {loading && <ActivityIndicator size="large" />}
              </View>
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default AuthenticationModal;
