import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  CartStackNavigator,
  OrderStackNavigator,
  ProfileStackNavigator,
} from "./StackNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MainDrawerNavigator } from "./DrawerNavigator";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "home" }],
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#808080",
      }}
    >
      <Tab.Screen
        name="home"
        component={MainDrawerNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => {
                handleHomePress(); // Call reset function when "Home" is pressed
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
