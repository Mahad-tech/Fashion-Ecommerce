import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import SearchScreen from "../screens/SearchScreen";
import MenuScreen from "../screens/MenuScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

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
      <Stack.Screen name="checkout-screen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="search-screen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export const MenuStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="menu-screen" component={MenuScreen} />
      <Stack.Screen name="search-screen" component={SearchScreen} />
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
      <Stack.Screen name="register-screen" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};
