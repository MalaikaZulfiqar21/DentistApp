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
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  React.useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: "Contacts",
        message: "ContactsList app would like to access your contacts.",
        buttonPositive: "Accept",
      }).then((value) => {
        if (value === "granted") {
          setIsLoading(true);
          Contacts.getAll().then((contacts) => {
            setContacts(contacts);
          });
          setIsLoading(false);
        }
      });
    }
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
      {isLoading ? (
        <ActivityIndicator size={25} color={COLORS.primaryColor} />
      ) : (
        <FlatList
          ListEmptyComponent={() => (
            <View style={className("align-center justify-center mt-20")}>
              <Text style={className("text-16 text-bold text-pm")}>
                No contacts available
              </Text>
            </View>
          )}
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
