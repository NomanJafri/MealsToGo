import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StyledSafeAreaView } from "../../features/restaurants/screens/restaurants.screen";
import MapScreen from "../../features/map/screens/map.screen";

import { RestaurantNavigator } from "./restaurants.navigator";

function SettingsScreen() {
  return (
    <StyledSafeAreaView>
      <Text>Settings!</Text>
    </StyledSafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />;
  },
});

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
