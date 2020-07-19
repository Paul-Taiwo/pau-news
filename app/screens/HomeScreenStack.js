import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen, DynamicScreen } from "./";

const Tab = createMaterialTopTabNavigator();

const tabs = [
  {
    name: "World",
    Component: DynamicScreen,
  },
  {
    name: "Business",
    Component: DynamicScreen,
  },
  {
    name: "Politics",
    Component: DynamicScreen,
  },
  {
    name: "Tech",
    Component: DynamicScreen,
  },
  {
    name: "Entertainment",
    Component: DynamicScreen,
  },
  {
    name: "Religion",
    Component: DynamicScreen,
  },
];

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
        scrollEnabled: true,
        tabStyle: {
          width: 135,
        },
        labelStyle: { fontFamily: "Nunito-Bold", fontSize: 12, fontWeight: "500" },
      }}>
      {tabs.map(({ name, Component }) => (
        <Tab.Screen name={name}>
          {(props) => <Component {...props} name={name} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default HomeScreenStack;
