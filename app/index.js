import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";

import { HomeScreenStack, DetailsScreen } from "./screens";
import { TouchableOpacity } from "react-native-gesture-handler";
import WebViewScreen from "./screens/WebViewScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  headerRightContainerStyle: {
    marginRight: 15,
  },
  headerLeftContainerStyle: {
    marginLeft: Platform.OS === "android" ? 5 : 15,
  },
  headerBackImage: () => <AntDesign name='arrowleft' size={24} color='black' />,
  headerRight: () => (
    <TouchableOpacity>
      <AntDesign name='search1' size={24} color='black' />
    </TouchableOpacity>
  ),
};

const detailsScreenOption = ({ route }) => ({
  title: route.params.tabName ? route.params.tabName : route.name,
  headerTransparent: true,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 16,
  },
  headerBackImage: () => <AntDesign name='arrowleft' size={24} color='#fff' />,
  headerRight: () => (
    <TouchableOpacity>
      <AntDesign name='search1' size={24} color='#fff' />
    </TouchableOpacity>
  ),
});

export default function MainApp() {
  return (
    <>
      <StatusBar style='auto' />

      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name='News' component={HomeScreenStack} options={{}} />
          <Stack.Screen
            name='Details'
            component={DetailsScreen}
            options={detailsScreenOption}
          />
          <Stack.Screen
            name='WebView'
            component={WebViewScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
