import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { className } from "../../../../global-styles";
import { Image } from "react-native";
import { COLORS } from "../../../../utils/config";
const HomeHeader = () => {
  return (
    <View style={className("flex align-center justify-between")}>
      <View style={className("flex align-center")}>
        <Image
          source={require("../../../../assets/images/pngs/user.jpg")}
          style={{ height: 40, width: 40 }}
        />
        <View style={className("ml-5")}>
          <Text style={className("text-14 text-dark-grey text-semi")}>
            Hi, John
          </Text>
          <Text style={className("text-12 text-grey ")}>
            Find your suitable doctor
          </Text>
        </View>
      </View>
      <Image
        source={require("../../../../assets/images/pngs/noti.png")}
        style={{ height: 20, width: 20, tintColor: COLORS.primaryColor }}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});
