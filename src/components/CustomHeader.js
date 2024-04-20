import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { className } from "../global-styles";
import fonts from "../utils/fonts";
import { useNavigation } from "@react-navigation/native";
const CustomHeader = ({
  lable,
  showIcon = true,
  showLable = true,
  customStyle,
  customImg,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[className("flex align-center my-2 justify-between"), customStyle]}
    >
      {showIcon && (
        <TouchableOpacity
          onPress={() => navigation.canGoBack() && navigation.goBack()}
        >
          <Image
            source={require("../assets/images/pngs/arrow_back.png")}
            style={[className("h-4 w-6 mr-3"), customImg]}
          />
        </TouchableOpacity>
      )}
      {showLable && (
        <Text style={className("text-16 text-black text-semi")}>{lable}</Text>
      )}
      <View style={className("ml-4")} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
