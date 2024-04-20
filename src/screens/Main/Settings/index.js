import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { locationReceived } from "../../../store/reducer/userLocationSlice";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import CustomHeader from "../../../components/CustomHeader";
import { COLORS } from "../../../utils/config";

const Settings = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const renderOptions = ({ item }) => (
    <TouchableOpacity
      style={className(
        "bg-light-grey rounded-3 flex align-cente justify-betweenr p-4 mb-3"
      )}
      onPress={() => {
        if (item.name == "Edit Profile") {
          navigation.navigate("Profile");
        }
      }}
    >
      <View style={className("flex align-center flex-grow")}>
        <View style={className("w-8")}>
          <Image
            source={item.img}
            style={{
              height: item.name == "Help" ? 16 : 20,
              width: item.name == "Help" ? 16 : 20,
              tintColor: COLORS.primaryColor,
              marginRight: 12,
            }}
          />
        </View>

        <Text style={className("text-14 text-black")}>{item.name}</Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/images/pngs/Icon.png")}
          style={{ height: 25, width: 23, tintColor: COLORS.darkGray }}
        />
      </View>
    </TouchableOpacity>
  );
  const data = [
    {
      name: "Edit Profile",
      img: require("../../../assets/images/pngs/account.png"),
    },
    {
      name: "Notifications",
      img: require("../../../assets/images/pngs/noti.png"),
    },
    {
      name: "Privacy and Security",
      img: require("../../../assets/images/pngs/gpp_good.png"),
    },
    {
      name: "Payments",
      img: require("../../../assets/images/pngs/revenu.png"),
    },
    {
      name: "Ads",
      img: require("../../../assets/images/pngs/ads.png"),
    },
    {
      name: "Account",
      img: require("../../../assets/images/pngs/account.png"),
    },
    {
      name: "Help",
      img: require("../../../assets/images/pngs/help.png"),
    },
    {
      name: "About",
      img: require("../../../assets/images/pngs/info-circle.png"),
    },
  ];
  return (
    <Layout
      isSafeAreaView={true}
      showNavBar={false}
      containerStyle={className("bg-white ")}
      StatusBarBg={"white"}
    >
      <View>
        <CustomHeader lable={"Settings"} customStyle={className("px-4")} />
        <View style={className(" border-light-grey border-b-2")} />
        <View style={className("mt-5 px-4")}>
          <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderOptions}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Settings;

const styles = StyleSheet.create({});
