import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import Profile from "../screens/Main/Profile";
import BottomNavigation from "./BottomNavigation";
import ContactsList from "../screens/Main/Contacts";
import Map from "../screens/Main/Map";
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomNavigation} />
      <Drawer.Screen name="My Contact" component={ContactsList} />
      <Drawer.Screen name="Show my location" component={Map} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
