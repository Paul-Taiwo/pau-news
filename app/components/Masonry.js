import React from "react";

import { View } from "react-native";

const Masonry = ({ columns, gap, children }) => {
  const columnWrapper = {};
  const result = [];

  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;

    columnWrapper[`column${columnIndex}`].push(
      <View style={{ marginBottom: gap }}>{children[i]}</View>
    );
  }

  for (let i = 0; i < columns; i++) {
    result.push(
      <View style={{ marginLeft: i > 0 ? gap : 0, flex: 1 }}>
        {columnWrapper[`column${i}`]}
      </View>
    );
  }

  return <View style={{ flexDirection: "row" }}>{result}</View>;
};

export default Masonry;
