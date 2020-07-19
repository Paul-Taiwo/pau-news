import { StyleSheet, Platform, StatusBar } from "react-native";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  pageContainer: {
    paddingHorizontal: 20,
  },
  mb20: {
    marginBottom: 20,
  },
  px20: {
    paddingHorizontal: 20,
  },
});

export default globalStyle;
