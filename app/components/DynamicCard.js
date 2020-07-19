import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import img from "../../assets/images/drone.jpeg";

const cards = [
  { width: "100%", height: 220 },
  { width: "49%", height: 220 },
  { width: "49%", height: 110 },
];

const getRandomCard = (index) => {
  const card = cards[Math.floor(Math.random() * cards.length)];

  if (index === 0) {
    return {
      width: cards[0].width,
      height: cards[0].height,
    };
  }

  if (index === 1) {
    return {
      width: cards[1].width,
      height: cards[1].height,
    };
  }

  if (index === 2 || index === 3) {
    return {
      width: cards[2].width,
      height: cards[2].height,
    };
  }

  return {
    width: card.width,
    height: card.height,
  };
};

const DynamicCard = ({ index }) => {
  return (
    <View
      style={{
        height: getRandomCard(index).height,
        width: getRandomCard(index).width,
        borderRadius: 15,
        overflow: "hidden",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "red",
      }}>
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
    // height: getRandomCard().height,
    // width: getRandomCard().width,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  textWhite: {
    color: "#ffffff",
  },
  textGrey: {
    color: "#e2e2e2",
  },
});

export default DynamicCard;
