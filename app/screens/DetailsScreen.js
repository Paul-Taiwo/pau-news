import React, { useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";

import img from "../../assets/images/bbc.jpg";

const DetailsScreen = () => {
  useEffect(() => {}, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={img} style={{ width: "100%", height: 300 }}>
        <View>
          <Text>Hi</Text>
        </View>
      </ImageBackground>
      <Text>Details!</Text>
    </View>
  );
};

export default DetailsScreen;
