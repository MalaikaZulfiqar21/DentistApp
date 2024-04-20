import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { className } from "../../../../global-styles";
import { Image } from "react-native";
const CategoryCard = ({ img, cat_name }) => {
  return (
    <View
      style={[
        className(
          "bg-light-grey rounded-2 align-center justify-center py-2 w-22 my-4 mx-2  "
        ),
      ]}
    >
      <Image source={img} style={{ height: 40, width: 40 }} />
      <Text style={className("text-10 text-black")}>{cat_name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({});
