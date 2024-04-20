import { TouchableOpacity, ActivityIndicator, Text } from "react-native";
import React from "react";

import { COLORS } from "../utils/config";
import fonts from "../utils/fonts";
import { className } from "../global-styles";

const CustomButton = ({
  onPress,
  title,
  disabled,
  loading,
  customStyle,
  customText,
  marginBottom,
  marginTop,
  backgroundColor,
  color,
  width = "100%",
  height = 56,
  borderRadius = 8,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  alignSelf = "center",
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      style={[
        {
          backgroundColor: disabled
            ? COLORS.disabled
            : backgroundColor
            ? backgroundColor
            : COLORS.primaryColor,
          marginTop,
          marginBottom,
          width,
          height,
          borderRadius,
          flexDirection,
          alignItems,
          justifyContent,
          alignSelf,
        },
        customStyle,
      ]}
      onPress={onPress}
    >
      {loading && <ActivityIndicator size={25} color={COLORS.white} />}
      {!loading && (
        <Text
          style={[
            className("text-16 text-bold "),
            { color: disabled ? "#A8A6A5" : COLORS.white },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
