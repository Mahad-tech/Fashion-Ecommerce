import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenCategoryScreen from "../screens/MenCategoryScreen";
import WomenCategoryScreen from "../screens/WomenCategoryScreen";
import KidsCategoryScreen from "../screens/KidsCategoryScreen";
import { MainStackNavigator } from "./StackNavigator";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

export const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
      // Use custom drawer
    >
      {/* Home Screen */}
      <Drawer.Screen
        name="Home"
        component={MainStackNavigator}
        options={{ headerShown: false }}
      />

      {/* Categories */}
      <Drawer.Screen name="Men" component={MenCategoryScreen} />
      <Drawer.Screen name="Women" component={WomenCategoryScreen} />
      <Drawer.Screen name="Juniors" component={KidsCategoryScreen} />
    </Drawer.Navigator>
  );
};

// Styles for custom drawer
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
  },
  horizontalMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    color: "#333",
  },
  activeText: {
    // textDecorationLine: "underline",
    color: "blue",
  },
  subcategoryText: {
    fontSize: 16,
    marginLeft: 20,
    marginTop: 10,
  },
  subOptionsContainer: {
    marginLeft: 40,
    marginTop: 10,
  },
  subOptionText: {
    fontSize: 14,
    marginTop: 5,
    color: "#666",
  },
  boldText: {
    fontWeight: "bold",
  },
});
