import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Image } from "react-native";
import { COLORS } from "../../../../utils/config";

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ width: "7%", marginLeft: 10 }}>
        <Image
          source={require("../../../../assets/images/pngs/search.png")}
          style={{ height: 15, width: 15, tintColor: COLORS.darkGray }}
        />
      </View>
      <View style={{ width: "86%" }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.darkGray}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    marginVertical: 10,
  },
});
