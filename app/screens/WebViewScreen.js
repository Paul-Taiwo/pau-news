import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar as AndroidStatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ navigation, route }) => {
  const { urlToWeb } = route.params;

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Platform.OS === "ios" ? 0 : AndroidStatusBar.currentHeight,
        }}>
        <View
          style={{
            flex: 1,
            position: "relative",
            // borderStyle: "solid",
            // borderWidth: 2,
            // borderColor: "red",
          }}>
          <WebView source={{ uri: urlToWeb }} />
          <View
            style={{
              position: "absolute",
              bottom: 30,
              left: 20,
            }}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: "red",
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
              onPress={() => navigation.navigate("Details")}>
              <AntDesign
                style={{
                  marginTop: Platform.OS === "ios" ? 4 : 0,
                }}
                name='arrowleft'
                size={20}
                color='#fff'
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default WebViewScreen;
