import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import fonts from "./utils/fonts";

const padding = () => {
  const sizes = [
    1,
    1.5,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
  ];

  return sizes.reduce((pre, size) => {
    const value = responsiveWidth(size);
    pre[`pt-${size}`] = { paddingTop: value };
    pre[`pb-${size}`] = { paddingBottom: value };
    pre[`pl-${size}`] = { paddingLeft: value };
    pre[`pr-${size}`] = { paddingRight: value };
    pre[`p-${size}`] = { padding: value };
    pre[`px-${size}`] = { paddingLeft: value, paddingRight: value };
    pre[`py-${size}`] = { paddingTop: value, paddingBottom: value };

    return pre;
  }, {});
};

const margin = () => {
  const sizes = [
    1,
    1.5,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
  ];

  return sizes.reduce((pre, size) => {
    const value = responsiveWidth(size);
    pre[`mt-${size}`] = { marginTop: value };
    pre[`mb-${size}`] = { marginBottom: value };
    pre[`ml-${size}`] = { marginLeft: value };
    pre[`mr-${size}`] = { marginRight: value };
    pre[`m-${size}`] = { margin: value };
    pre[`mx-${size}`] = { marginLeft: value, marginRight: value };
    pre[`my-${size}`] = { marginTop: value, marginBottom: value };

    return pre;
  }, {});
};

const width = () => {
  const sizes = [
    1,
    1.5,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
  ];
  const base = sizes.reduce((pre, size) => {
    pre[`w-${size}`] = { width: responsiveWidth(size) };
    return pre;
  }, {});

  return { ...base, "w-full": { width: "100%" } };
};

const height = () => {
  const sizes = [
    1,
    1.5,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
  ];

  const base = sizes.reduce((pre, size) => {
    pre[`h-${size}`] = { height: responsiveWidth(size) };
    return pre;
  }, {});

  return { ...base, "h-full": { height: "100%" } };
};

const colors = {
  // grey
  grey: "#cccccc",
  "dark-grey": "#8D8C92",
  "light-grey": "#F2F1F6",

  // base
  white: "#ffffff",
  black: "#000000",
  purple: "#0000FF",
  lightpurple: "#9C5EFF",
  purplelow: "rgba(156, 94, 255, 0.4)",
  red: "#8B0000",
  main: "#DF4142",
  mainlow: "rgba(223,65,66,0.4)",
  offWhite: "#adc5db",
  inputbg: "#19426b",
  green: "#22da93",
  transparent: "transparent",
  pm: "#2596be",
};

const backgroundColor = () => {
  return Object.keys(colors).reduce((pre, key) => {
    pre[`bg-${key}`] = { backgroundColor: colors[key] };
    return pre;
  }, {});
};

const borderColor = () => {
  return Object.keys(colors).reduce((pre, key) => {
    pre[`border-${key}`] = { borderColor: colors[key] };
    return pre;
  }, {});
};

const textAlign = () => {
  return {
    "text-left": { textAlign: "left" },
    "text-center": { textAlign: "center" },
    "text-right": { textAlign: "right" },
    "text-justify": { textAlign: "justify" },
  };
};

const textColor = () => {
  return Object.keys(colors).reduce((pre, key) => {
    pre[`text-${key}`] = { color: colors[key] };
    return pre;
  }, {});
};

const flex = () => {
  return {
    flex: { display: "flex", flexDirection: "row" },
    "flex-column": { display: "flex", flexDirection: "column" },
    "flex-1": { flex: 1 },
    "flex-grow": { flexGrow: 1 },
    "align-center": { alignItems: "center" },
    "justify-center": { justifyContent: "center" },
    "justify-between": { justifyContent: "space-between" },
    "justify-evenly": { justifyContent: "space-evenly" },
    "justify-end": { justifyContent: "flex-end" },
    "align-end": { alignItems: "flex-end" },
    "shadow-3": {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    "shadow-8": {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
  };
};

const textSize = () => {
  return {
    "text-xs": {
      fontSize: responsiveFontSize(0.5),
      lineHeight: responsiveFontSize(0.5 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-sm": {
      fontSize: responsiveFontSize(1),
      lineHeight: responsiveFontSize(1 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-base-xs": {
      fontSize: responsiveFontSize(1.5),
      lineHeight: responsiveFontSize(1.5 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-base-sm": {
      fontSize: responsiveFontSize(1.85),
      lineHeight: responsiveFontSize(1.85 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-base": {
      fontSize: responsiveFontSize(2),
      lineHeight: responsiveFontSize(2 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-base-med": {
      fontSize: responsiveFontSize(2.5),
      lineHeight: responsiveFontSize(2.5 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-lg": {
      fontSize: responsiveFontSize(3),
      lineHeight: responsiveFontSize(3 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-xl": {
      fontSize: responsiveFontSize(4),
      lineHeight: responsiveFontSize(4 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-10": {
      fontSize: responsiveFontSize(1.35),
      lineHeight: responsiveFontSize(1.35 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-11": {
      fontSize: responsiveFontSize(1.4),
      lineHeight: responsiveFontSize(1.4 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-12": {
      fontSize: responsiveFontSize(1.6),
      lineHeight: responsiveFontSize(1.6 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-13": {
      fontSize: responsiveFontSize(1.75),
      lineHeight: responsiveFontSize(1.75 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-14": {
      fontSize: responsiveFontSize(1.9),
      lineHeight: responsiveFontSize(1.9 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-16": {
      fontSize: responsiveFontSize(2.1),
      lineHeight: responsiveFontSize(2.1 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-18": {
      fontSize: responsiveFontSize(2.3),
      lineHeight: responsiveFontSize(2.3 * 1.4),
      fontFamily: fonts.regular,
    },
    "text-bold": { fontFamily: fonts.bold },
    "text-reg": { fontFamily: fonts.medium },
    "text-semi": { fontFamily: fonts.semiBold },
  };
};

const borderRadius = () => {
  const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return sizes.reduce((pre, size) => {
    pre[`rounded-${size}`] = { borderRadius: responsiveWidth(size) };
    return pre;
  }, {});
};

const border = () => {
  const sizes = [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const base = sizes.reduce((pre, size) => {
    pre[`border-${size}`] = { borderWidth: responsiveWidth(size / 5) };
    pre[`border-t-${size}`] = { borderTopWidth: responsiveWidth(size / 5) };
    pre[`border-b-${size}`] = { borderBottomWidth: responsiveWidth(size / 5) };
    pre[`border-l-${size}`] = { borderLeftWidth: responsiveWidth(size / 5) };
    pre[`border-r-${size}`] = { borderRightWidth: responsiveWidth(size / 5) };
    return pre;
  }, {});

  return { ...base };
};

export const globalStyles = StyleSheet.create({
  ...flex(),
  ...width(),
  ...height(),

  ...margin(),
  ...padding(),

  ...border(),
  ...borderColor(),
  ...borderRadius(),

  ...backgroundColor(),

  ...textSize(),
  ...textColor(),
  ...textAlign(),
});

export const className = (str) => {
  const items = str.split(" ");

  return items.reduce((pre, item) => {
    return { ...pre, ...globalStyles[item] };
  }, {});
};
