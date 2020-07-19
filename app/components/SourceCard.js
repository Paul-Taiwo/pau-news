import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import bbc from "../../assets/images/bbc.jpg";

const SourcesCard = ({ bgColor }) => {
  return (
    <View
      style={[
        style.sourceCard,
        {
          backgroundColor: bgColor,
        },
      ]}>
      <View style={style.sourceCardImgContainer}>
        <Image style={style.sourceCardImg} source={bbc} />
      </View>
      <View
        style={{
          width: "72%",
        }}>
        <Text style={style.sourceCardHeader}>BBC News</Text>
        <View
          style={{
            flexDirection: "row",
          }}>
          <Text numberOfLines={2} style={style.sourceCardText}>
            Use BBC News for up-to-the-minute news, breaking news, video, audio and
            feature stories.
          </Text>
        </View>
        <Text style={style.sourceCardTime}>June 24, 2019</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  sourceCard: {
    width: 250,
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    marginRight: 10,
  },
  sourceCardHeader: {
    color: "#dbd6f1",
    fontSize: 12.5,
    fontFamily: "Nunito-Regular",
  },
  sourceCardImgContainer: {
    justifyContent: "center",
    marginRight: 12,
  },
  sourceCardImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  sourceCardText: {
    fontFamily: "Nunito-Bold",
    color: "#ffffff",
    fontSize: 15,
    flex: 1,
    flexWrap: "wrap",
  },
  sourceCardTime: {
    color: "#dbd6f1",
    fontSize: 10.5,
    fontFamily: "Nunito-Regular",
  },
});

export default SourcesCard;

// borderWidth: 1,
// borderColor: "red",
// borderStyle: "solid",
