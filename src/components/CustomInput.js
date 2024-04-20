import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";

import { COLORS } from "../utils/config";
import Icon from "react-native-vector-icons/Feather";
import fonts from "../utils/fonts";
import { className } from "../global-styles";

const CustomInput = ({
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
  maxLength,
  placeholderTextColor,
  editable,
  textAlignVertical,
  marginBottom,
  height,
  autoCapitalize,
  error,
  isFocus,
  isBlur,
  width,
  onEndEditing,
  autoFocus,
  ref,
  searchIcon,
  borderRadius,
  marginTop,
  withLabel,
  onMail,
  password,
  setIsSecureText,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    isFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    isBlur?.();
  };

  return (
    <>
      {withLabel && (
        <Text
          style={[
            className("text-14 text-black mb-2"),
            { fontFamily: fonts.medium },
          ]}
        >
          {withLabel}
        </Text>
      )}
      <View
        style={[
          styles.mainContainer,
          {
            marginBottom: marginBottom || 20,
            marginTop,
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.primaryColor
              : COLORS.lightGray,
            height: height || 55,
            width: width || "100%",
            borderRadius: borderRadius || 8,
          },
        ]}
      >
        <TextInput
          ref={ref}
          placeholder={placeholder}
          style={[
            styles.input,
            {
              width: secureTextEntry ? "95%" : "98%",
              paddingVertical: multiline ? 18 : 0,
              paddingHorizontal: searchIcon || onMail ? 10 : 0,
            },
          ]}
          secureTextEntry={secureTextEntry}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          onEndEditing={onEndEditing}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor || COLORS.lightGray}
          editable={!editable}
          textAlignVertical={multiline ? "top" : textAlignVertical}
          autoCapitalize={autoCapitalize}
          autoFocus={autoFocus}
        />

        {password && (
          <TouchableOpacity
            onPress={() => setIsSecureText((prev) => !prev)}
            style={{ position: "absolute", right: 15 }}
          >
            <Icon
              name={secureTextEntry ? "eye-off" : "eye"}
              color={COLORS.darkGray}
              size={18}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  input: {
    height: "100%",
    padding: 0,
    margin: 0,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: COLORS.black,
  },
});
