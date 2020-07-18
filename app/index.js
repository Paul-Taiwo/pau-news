import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { HomeScreen, DynamicScreen } from "./screens";
import globalStyle from "./styles/globalStyle";

const Tab = createMaterialTopTabNavigator();

export default function MainApp() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Tab.Navigator
          swipeEnabled={true}
          tabBarOptions={{
            indicatorStyle: { backgroundColor: "transparent" },
            activeTintColor: "#000",
            inactiveTintColor: "gray",
            labelStyle: { fontFamily: "Nunito-Bold" },
          }}>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Music' component={DynamicScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
