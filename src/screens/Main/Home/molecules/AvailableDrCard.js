import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { className } from "../../../../global-styles";
import Icon from "react-native-vector-icons/FontAwesome";

const AvailableDrCard = ({ name, img, date, isFirst, isLast }) => {
  return (
    <View
      style={[
        className("bg-pm rounded-2 h-40 flex my-4 "),
        {
          marginLeft: isFirst ? 16 : 7,
          marginRight: isLast ? 16 : 7,
        },
      ]}
    >
      <View style={className("mt-4 ml-4")}>
        <Text style={className("text-14 text-white text-semi")}>
          Looking For Your Dentist
        </Text>
        <Text style={className("text-14 text-white text-semi")}>
          Specialist Doctor
        </Text>
        <Text style={className("text-14 text-white  mt-4")}>{name}</Text>
        <Text style={className("text-14 text-white ")}>{date}</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Icon
              key={index}
              name="star"
              size={12}
              color="#FFD700"
              style={styles.starIcon}
            />
          ))}
        </View>
      </View>
      <View>
        <Image
          source={img}
          style={{ height: 145, width: 120, marginRight: 10 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default AvailableDrCard;

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    marginRight: 2,
  },
});
