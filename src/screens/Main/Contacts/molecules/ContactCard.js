import React from "react";
import { View, Text, StyleSheet } from "react-native";
import fonts from "../../../../utils/fonts";
import { COLORS } from "../../../../utils/config";

const ContactCard = ({ contact }) => {
  return (
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.givenName[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.givenName} {contact?.middleName && contact.middleName + " "}
          {contact?.familyName}
        </Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
    paddingHorizontal: 18,
  },
  imgCon: {},
  placeholder: {
    width: 48,
    height: 48,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: COLORS.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: COLORS.white,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: COLORS.black,
  },
  phoneNumber: {
    color: "#888",
    fontFamily: fonts.regular,
  },
});
export default ContactCard;
