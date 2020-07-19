import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import { HomeScreenStack, DetailsScreen } from "./screens";
import globalStyle from "./styles/globalStyle";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function MainApp() {
  return (
    <>
      {/* <SafeAreaView style={globalStyle.container}> */}
      <StatusBar style='auto' />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerBackImage: () => <AntDesign name='arrowleft' size={24} color='black' />,
            headerRightContainerStyle: {
              marginRight: 15,
            },
            headerLeftContainerStyle: {
              marginLeft: Platform.OS === "android" ? 5 : 15,
            },
            headerRight: () => (
              <TouchableOpacity>
                <AntDesign name='search1' size={24} color='black' />
              </TouchableOpacity>
            ),
            headerBackTitleVisible: false,
          }}>
          <Stack.Screen name='News' component={HomeScreenStack} options={{}} />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            headerTr
            options={
              (({ route }) => ({
                title: route.params.tabName ? route.params.tabName : route.name,
              }),
              {
                headerTransparent: true,
              })
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </>
  );
}
