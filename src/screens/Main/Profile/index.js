import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import { COLORS } from "../../../utils/config";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
const Profile = () => {
  const init = {
    fName: "John",
    lName: "Doe",
    email: "john@gmail.con",
    phone: "+923000000000",
  };
  const [state, setState] = useState(init);
  const [address, setAddress] = useState("");
  const array = [
    {
      id: 1,
      placeholder: "First Name",
      value: state.fName,
      onChange: (text) => setState({ ...state, fName: text }),
    },
    {
      id: 2,
      placeholder: "Last Name",
      value: state.lName,
      onChange: (text) => setState({ ...state, fName: text }),
    },
    {
      id: 3,
      placeholder: "Email",
      value: state.email,
      onChange: (text) => setState({ ...state, fName: text }),
    },
    {
      id: 4,
      placeholder: "Phone Number",
      value: state.phone,
      onChange: (text) => setState({ ...state, fName: text }),
    },
  ];
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  return (
    <Layout
      isSafeAreaView={false}
      showNavBar={false}
      containerStyle={className("bg-white")}
      StatusBarBg={COLORS.primaryColor}
    >
      <View style={className("bg-pm h-30")} />
      <View
        style={{
          alignSelf: "center",
          position: "absolute",
          top: getStatusBarHeight() + 10,
        }}
      >
        <View
          style={[
            {
              marginTop: 10,
              alignSelf: "center",
            },
          ]}
        >
          <View
            style={{
              position: "absolute",
              top: 77,
              right: 2,
              zIndex: 10000,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: 3,
            }}
          >
            <Image
              source={require("../../../assets/images/pngs/editIcon.png")}
              style={{ height: 20, width: 20, tintColor: COLORS.primaryColor }}
            />
          </View>
          <Image
            source={require("../../../assets/images/pngs/user.jpg")}
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
      <View style={className("mt-20 mx-4")}>
        {array.map((item) => (
          <CustomInput
            key={item?.id}
            placeholder={item.placeholder}
            value={item.value}
            onChangeText={item.onChange}
            withLabel={item.placeholder}
          />
        ))}
        <CustomButton title={"Edit Profile"} />
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({});
