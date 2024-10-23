// components/DeliveryAddress.js

import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import RBSheet from "react-native-raw-bottom-sheet";
import FloatingLabelInput from "./FloatingLabelInput";

const DeliveryAddress = () => {
  const refRBSheet = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [phone_number, setPhone_Number] = useState("");

  return (
    <View>
      <Text style={tw`text-lg font-semibold mt-2`}>Delivery Address</Text>
      <View style={tw`bg-gray-100 p-4 rounded-md mb-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="location-sharp" size={20} color="black" />
            <Text style={tw`ml-2 text-sm font-medium`}>Home</Text>
          </View>
          <TouchableOpacity onPress={() => refRBSheet.current.open()}>
            <Text style={tw`text-blue-500`}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`mt-2 text-gray-600`}>
          1901 Thornridge Cir. Shiloh, Hawaii 81063
        </Text>
      </View>

      {/* RBSheet Component */}
      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={250}
        draggable={true}
        customStyles={{
          container: {
            padding: 16,
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <View style={tw`flex-1`}>
          <Text style={tw`text-lg font-semibold mb-4`}>Billing Address</Text>
          {/* Address Options */}

          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-1 mr-2`}>
              <FloatingLabelInput
                label="First Name"
                value={name}
                onChangeText={setName}
                isError={!name}
                secureTextEntry={undefined}
              />
            </View>
            <View style={tw`flex-1 ml-2`}>
              <FloatingLabelInput
                label="Surname"
                value={surname}
                onChangeText={setSurname}
                isError={!surname}
                secureTextEntry={undefined}
              />
            </View>
          </View>

          <View>
            <FloatingLabelInput
              label="Email address"
              value={email}
              onChangeText={setEmail}
              isError={!email}
              secureTextEntry={undefined}
            />

            <FloatingLabelInput
              label="Billing address"
              value={address}
              onChangeText={setAddress}
              isError={!address}
              secureTextEntry={undefined}
            />

            <FloatingLabelInput
              label="City/Town"
              value={city}
              onChangeText={setCity}
              isError={!city}
              secureTextEntry={undefined}
            />

            <View style={tw`flex-row justify-between`}>
              <View style={tw`flex-1 mr-2`}>
                <FloatingLabelInput
                  label="State/Province"
                  value={state}
                  onChangeText={setState}
                  isError={!state}
                  secureTextEntry={undefined}
                />
              </View>
              <View style={tw`flex-1 ml-2`}>
                <FloatingLabelInput
                  label="Postalcode/Zipcode"
                  value={zipcode}
                  onChangeText={setZipcode}
                  isError={!zipcode}
                  secureTextEntry={undefined}
                />
              </View>
            </View>
            <FloatingLabelInput
              label="Phone Number"
              value={phone_number}
              onChangeText={setPhone_Number}
              isError={!phone_number}
              secureTextEntry={undefined}
              type="numeric"
            />
          </View>
        </View>
        <View>
          {/* Close Button */}
          <TouchableOpacity
            onPress={() => refRBSheet.current.close()}
            style={tw`mt-4 bg-black py-4 rounded-lg`}
          >
            <Text style={tw`text-center text-white font-semibold`}>Done</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default DeliveryAddress;
