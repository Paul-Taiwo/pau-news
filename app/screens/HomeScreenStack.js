import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeScreen, DynamicScreen } from "./";

const Tab = createMaterialTopTabNavigator();

const getComponent = () => DynamicScreen;

const tabs = [
  {
    name: "World",
    Component: HomeScreen,
  },
  {
    name: "Business",
    Component: getComponent(),
  },
  {
    name: "Politics",
    Component: getComponent(),
  },
  {
    name: "Tech",
    Component: getComponent(),
  },
  {
    name: "Entertainment",
    Component: getComponent(),
  },
  {
    name: "Religion",
    Component: getComponent(),
  },
];

const Tabs = tabs.map(({ name, Component }, ind) => {
  return (
    <Tab.Screen name={name} key={ind}>
      {(props) => <Component {...props} name={name} />}
    </Tab.Screen>
  );
});

const tabBarOptions = {
  indicatorStyle: { backgroundColor: "transparent" },
  activeTintColor: "#000",
  inactiveTintColor: "gray",
  scrollEnabled: true,
  tabStyle: {
    width: 135,
  },
  labelStyle: { fontFamily: "Nunito-Bold", fontSize: 12, fontWeight: "500" },
  style: {
    elevation: 0,
    shadowOpacity: 0,
  },
};

const HomeScreenStack = () => {
  return (
    <Tab.Navigator
      lazy={true}
      backBehavior='history'
      swipeEnabled={true}
      tabBarOptions={tabBarOptions}>
      {Tabs}
    </Tab.Navigator>
  );
};

export default HomeScreenStack;
