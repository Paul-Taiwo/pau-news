import React from "react";
import { View } from "react-native";

const Spacer = ({ top, right, bottom, left }) => {
  return (
    <View
      style={{
        marginRight: right ? right : 0,
        marginTop: top ? top : 0,
        marginLeft: left ? left : 0,
        marginBottom: bottom ? bottom : 0,
      }}
    />
  );
};

export default Spacer;
