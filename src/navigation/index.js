import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { usersLoading } from "../store/reducer/usersSlice";
import CustomDrawer from "../components/CustomDrawer";
import { Text, View, PermissionsAndroid, Platform } from "react-native";
import Splash from "../screens/Main/Splash";
import DrawerNavigation from "./DrawerNavigation";
import Login from "../screens/Auth/Login";

const Stack = createNativeStackNavigator();

function Navigation(props) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeStack" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default Navigation;
