import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import img from "../../assets/images/drone.jpeg";

const FeaturedCard = () => {
  return (
    <View>
      <ImageBackground source={img} style={style.card}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "#000000",
            opacity: 0.4,
          }}
        />
        <View
          style={{
            margin: 15,
          }}>
          <Text
            style={[
              style.textWhite,
              {
                fontSize: 18,
                lineHeight: 20,
                fontFamily: "Nunito-ExtraBold",
                marginBottom: 5,
              },
            ]}>
            Drone Racing league is racing $50 million
          </Text>
          <Text
            style={[
              style.textGrey,
              {
                fontSize: 12,
                fontFamily: "Nunito-Regular",
              },
            ]}>
            2 hours ago
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    height: 220,
    width: 165,
    borderRadius: 15,
    resizeMode: "cover",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  textWhite: {
    color: "#ffffff",
  },
  textGrey: {
    color: "#e2e2e2",
  },
});

export default FeaturedCard;
