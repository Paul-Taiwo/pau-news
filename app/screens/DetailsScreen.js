import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Platform, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

import img from "../../assets/images/bbc.jpg";
import globalStyle from "../styles/globalStyle";
import Featureds from "../components/Featureds";

const DetailsScreen = () => {
  const [news, setNews] = useState({
    fetched: false,
    data: {},
  });

  useEffect(() => {
    // axios
    //   .get(
    //     "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-19&sortBy=publishedAt&apiKey=100440efe93846779e7d7aa990683d66"
    //   )
    //   .then((res) => {
    //     console.log("===========+>", res.data.articles[0].content);
    //     setNews({ fetched: true, data: { ...res.data.articles[0] } });
    //   });
  }, []);
  return (
    <>
      <StatusBar style='light' />

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground source={img} style={styles.image}>
            <View style={styles.imageOverlay} />
            <View>
              <Text>Hi</Text>
            </View>
          </ImageBackground>
          <View style={styles.pageCard}>
            <View style={[globalStyle.pageContainer, styles.mt_45]}>
              <View style={globalStyle.mb20}>
                <Text style={styles.headerText}>
                  Why A Short-Term Melt-Up Seems Likely Here - Seeking Alpha
                </Text>
              </View>
              {/* {news.fetched && <WebView source={{ uri: "https://www.freerepublic.com/focus/f-chat/3866263/posts" }} />} */}

              <View style={styles.mb_30}>
                {news.fetched && (
                  <Text style={styles.contentText}>{news.data.content}</Text>
                )}
              </View>
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>View More</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.relatedContainer}>
                <Text style={styles.relatedHeaderText}>Related</Text>
              </View>
            </View>
          </View>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: 20 - 12,
            paddingLeft: 20,
            backgroundColor: "#ffffff",
          }}
          style={[globalStyle.mb20]}>
          <Featureds />
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Platform.OS === "ios" ? 380 : 320,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000000",
    opacity: 0.4,
  },
  pageCard: {
    height: "100%",
    marginTop: Platform.OS === "ios" ? -53 : -45,
    borderTopRightRadius: Platform.OS === "android" ? 45 : 50,
    borderTopLeftRadius: Platform.OS === "android" ? 45 : 50,
    backgroundColor: "#fff",
  },
  headerText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 20,
    color: "#000",
  },
  contentText: {
    color: "#9d9d9d",
    lineHeight: 30,
    fontSize: 14,
  },
  button: {
    padding: 10,
    backgroundColor: "#000",
    alignItems: "center",
    borderRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Nunito-Black",
  },
  relatedContainer: {
    marginTop: 30,
    marginBottom: 25,
  },
  relatedHeaderText: {
    fontSize: 18,
    fontFamily: "Nunito-ExtraBold",
    color: "#000",
  },
  mt_45: {
    marginTop: 45,
  },
  mb_30: {
    marginBottom: 30,
  },
});

export default DetailsScreen;
