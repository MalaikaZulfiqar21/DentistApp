import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import Layout from "../../../components/Layout";
import { className } from "../../../global-styles";
import CustomHeader from "../../../components/CustomHeader";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import Error from "../../../components/Error";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").label("Name"),
    password: Yup.string().required("Password is required").label("Password"),
  });
  const LoginUser = () => {
    navigation.replace("HomeStack");
  };
  const [isSecureText, setIsSecureText] = useState(true);
  return (
    <Layout
      isSafeAreaView={true}
      showNavBar={false}
      containerStyle={className("bg-white px-4")}
    >
      <Text
        style={[
          className(" text-black my-2 text-semi text-center"),
          { fontSize: 24 },
        ]}
      >
        Hi! Welcome Back
      </Text>
      <View>
        <Formik
          initialValues={{ name: "", password: "" }}
          onSubmit={(values) => LoginUser(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            touched,
            errors,
            setFieldTouched,
            values,
            isValid,
          }) => (
            <>
              <CustomInput
                withLabel={"Name"}
                placeholder={"Enter your name"}
                value={values.name}
                onBlur={() => setFieldTouched("name")}
                onChangeText={(text) => handleChange("name")(text)}
                error={touched.name && errors.name}
                marginBottom={10}
              />
              <Error error={errors.name} visible={touched.name} />
              <CustomInput
                withLabel={"Password"}
                placeholder={"Enter your password"}
                value={values.password}
                onBlur={() => setFieldTouched("password")}
                onChangeText={(text) => handleChange("password")(text)}
                error={touched.password && errors.password}
                marginBottom={10}
                secureTextEntry={isSecureText}
                setIsSecureText={setIsSecureText}
                password
                password
              />
              <Error error={errors.password} visible={touched.password} />
              <TouchableOpacity style={{ alignSelf: "flex-end" }}>
                <Text style={[className("text-14   text-pm my-1")]}>
                  Forgot Password ?
                </Text>
              </TouchableOpacity>
              <CustomButton
                title={"Login"}
                customStyle={className("my-5")}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
        <TouchableOpacity style={className("")}>
          <Text style={[className(" text-14   text-center"), { fontSize: 13 }]}>
            Don't have an account ?
            <Text style={className("text-pm")}> Register now</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({});
export default Login;
