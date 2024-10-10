import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="detail-screen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="product-screen" component={ProductListScreen} />
    </Stack.Navigator>
  );
};

export const CartStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cart-screen" component={CartScreen} />
    </Stack.Navigator>
  );
};

export const OrderStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="order-screen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="profile-screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
