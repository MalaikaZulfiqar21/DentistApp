import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from "react-native";
import Contacts from "react-native-contacts";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import ContactCard from "./molecules/ContactCard";
import CustomHeader from "../../../components/CustomHeader";
import { COLORS } from "../../../utils/config";
const ContactsList = () => {
  const [contacts, setContacts] = React.useState(null);

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        let granted = false;
        if (Platform.OS === "android") {
          granted =
            (await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
              {
                title: "Contacts",
                message: "ContactsList app would like to access your contacts.",
                buttonPositive: "Accept",
              }
            )) === "granted";
        } else {
          granted = true; // Permissions are not required for iOS
        }

        if (granted) {
          const fetchedContacts = await Contacts.getAll();
          setContacts(fetchedContacts);
        } else {
          // Handle permission denied scenario
          console.log("Permission denied");
        }
      } catch (error) {
        // Handle any errors that occur during permission request or fetching contacts
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };
  const renderItem = ({ item, index }) => {
    return <ContactCard contact={item} />;
  };
  return (
    <Layout
      isSafeAreaView={true}
      showNavBar={false}
      containerStyle={className("bg-white")}
    >
      <CustomHeader
        lable={"My Contacts"}
        showLable={true}
        customStyle={className("px-4")}
      />
      <View style={className(" border-light-grey border-b-2")} />
      {!contacts || contacts.length === 0 ? (
        <View style={className("align-center justify-center flex-1")}>
          <Text style={className("text-16 text-bold text-pm")}>
            No contacts available
          </Text>
        </View>
      ) : (
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});
export default ContactsList;
