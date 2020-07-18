import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen, DynamicScreen } from "./";

const Tab = createMaterialTopTabNavigator();

const HomeScreenStack = () => {
  return (
    <Tab.Navigator
      lazy={true}
      backBehavior='history'
      swipeEnabled={true}
      tabBarOptions={{
        indicatorStyle: { backgroundColor: "transparent" },
        activeTintColor: "#000",
        inactiveTintColor: "gray",
        labelStyle: { fontFamily: "Nunito-Bold" },
      }}>
      <Tab.Screen name='World' component={HomeScreen} />
      <Tab.Screen name='Music' component={DynamicScreen} />
      <Tab.Screen name='Food' component={DynamicScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreenStack;
