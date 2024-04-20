import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import { COLORS } from "../../../utils/config";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Replace 'Login' with your login screen route name
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout
      isSafeAreaView={false}
      showNavBar={false}
      containerStyle={className("bg-pm")}
      StatusBarBg={COLORS.primaryColor}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          flex: 1,
        }}
      >
        <Image
          style={{ height: 60, width: 60, tintColor: COLORS.white }}
          source={require("../../../assets/images/pngs/tooth.png")}
        />
      </View>
    </Layout>
  );
};

export default Splash;

const styles = StyleSheet.create({});
