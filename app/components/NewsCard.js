import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment";

import star from "../../assets/images/star.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewsCard = ({ data, handlePress }) => {
  const imgSrc = data ? { uri: data.urlToImage } : star;
  const timePublished = moment(data.publishedAt).format("MMMM DD, YYYY");
  const description =
    data.description == null ? "" : data.description.slice(0, 87) + "...";

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={() => handlePress(data)}>
      <View style={style.card}>
        <Image style={style.cardImg} source={imgSrc} />
        <View style={style.textContainer}>
          <View style={{ paddingRight: 7 }}>
            <Text numberOfLines={2} style={style.cardHeader}>
              {data.title}
            </Text>
          </View>
          <View style={{ paddingRight: 10 }}>
            <Text style={style.textContent}>{description}</Text>
          </View>
          <View>
            <Text style={style.cardTime}>{timePublished}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 12,
    maxHeight: 120,
    minHeight: 120,
    backgroundColor: "#ffffff",
    // shadowColor: "#ededed",
    // shadowOffset: "2px 4px ",
  },
  cardImg: {
    width: "30%",
    height: "100%",
    borderRadius: 12,
    marginRight: 8,
  },
  textContainer: {
    width: "70%",
    justifyContent: "center",
  },
  cardHeader: {
    fontFamily: "Nunito-ExtraBold",
    color: "#000",
    fontSize: 15,
    lineHeight: 20,
    flexWrap: "wrap",
    marginBottom: 4,
  },
  textContent: {
    fontFamily: "Nunito-Bold",
    color: "#9d9d9d",
    fontSize: 12,
    marginBottom: 4,
    lineHeight: 15,
  },
  cardTime: {
    color: "#A2A3A6",
    fontSize: 10,
    fontFamily: "Nunito-Bold",
  },
});
export default NewsCard;
