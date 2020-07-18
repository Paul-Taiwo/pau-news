import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import NavigationBar from "react-native-navbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreenStack, DetailsScreen } from "./screens";
import globalStyle from "./styles/globalStyle";

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <StatusBar style='auto' />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='News' component={HomeScreenStack} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
