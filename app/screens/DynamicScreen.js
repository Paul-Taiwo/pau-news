import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";

const DynamicScreen = ({ name, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}Hre</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details");
        }}
        style={{
          padding: 10,
          fontSize: 18,
          backgroundColor: "#000",
        }}>
        <Text
          style={{
            color: "#fff",
          }}>
          Click
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DynamicScreen;
