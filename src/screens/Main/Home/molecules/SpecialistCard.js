import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { className } from "../../../../global-styles";

const SpecialistCard = ({ name, img, isFirst, isLast }) => {
  return (
    <View
      style={[
        className("bg-light-grey rounded-2 h-40 w-30 my-4 "),
        {
          marginLeft: isFirst ? 16 : 7,
          marginRight: isLast ? 16 : 7,
        },
      ]}
    >
      <View style={className("bg-pm rounded-2 align-center")}>
        <Image
          style={{ height: 90, width: 200 }}
          resizeMode="contain"
          source={img}
        />
      </View>
      <View style={className("align-center mt-2")}>
        <Text style={className("text-12 text-black text-semi")}>{name}</Text>
        <Text style={className("text-10 text-black mt-1")}>
          Dentist Specialist
        </Text>
      </View>
    </View>
  );
};

export default SpecialistCard;

const styles = StyleSheet.create({});
