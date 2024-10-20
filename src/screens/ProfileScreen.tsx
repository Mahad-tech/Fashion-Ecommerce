import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Profile",
    });
  }, [navigation]);

  return (
    <ScrollView style={tw`flex-1 bg-gray-100 p-6 `}>
      <View style={tw`justify-center`}>
        <Text style={tw`text-black text-center text-xl mb-6`}>
          LOG IN TO YOUR ACCOUNT
        </Text>

        <TextInput
          style={tw`border-b border-gray-600 rounded p-3 text-black mb-4`}
          placeholder="Email"
          placeholderTextColor="#7f7f7f"
        />

        <TextInput
          style={tw`border-b border-gray-600 rounded-lg p-3 text-black mb-4`}
          placeholder="Password"
          placeholderTextColor="#7f7f7f"
          secureTextEntry
        />

        <TouchableOpacity style={tw`bg-black rounded-lg p-2 mb-4`}>
          {/* Set padding to 4 */}
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
          <TouchableOpacity style={tw`bg-black rounded-lg p-2`}>
            {/* Set padding to 4 */}
            <Text style={tw`text-white text-center text-lg`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

// import React from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import tw from "twrnc";

// const LoginScreen = () => {
//   return (
//     <View style={tw`flex-1 bg-black p-6 justify-center`}>
//       <Text style={tw`text-white text-2xl font-bold mb-6`}>
//         LOG IN TO YOUR ACCOUNT
//       </Text>

//       <TextInput
//         style={tw`border border-gray-600 rounded-lg p-4 text-white mb-4`}
//         placeholder="Email"
//         placeholderTextColor="#7f7f7f"
//       />

//       <TextInput
//         style={tw`border border-gray-600 rounded-lg p-4 text-white mb-4`}
//         placeholder="Password"
//         placeholderTextColor="#7f7f7f"
//         secureTextEntry
//       />

//       <TouchableOpacity style={tw`bg-white rounded-lg p-4 mb-4`}>
//         <Text style={tw`text-black text-center font-bold text-lg`}>LOG IN</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <Text style={tw`text-gray-400 text-center mb-6`}>
//           Have you forgotten your password?
//         </Text>
//       </TouchableOpacity>

//       <View style={tw`mt-10 items-center`}>
//         <Text style={tw`text-white text-lg mb-4`}>NEED AN ACCOUNT?</Text>
//         <TouchableOpacity style={tw`bg-white rounded-lg p-4`}>
//           <Text style={tw`text-black text-center font-bold text-lg`}>
//             REGISTER
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;
