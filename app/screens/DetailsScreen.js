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
          <ImageBackground
            source={img}
            style={{ width: "100%", height: Platform.OS === "ios" ? 380 : 320 }}>
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "#000000",
                opacity: 0.4,
              }}
            />
            <View>
              <Text>Hi</Text>
            </View>
          </ImageBackground>
          <View
            style={{
              marginTop: Platform.OS === "ios" ? -53 : -45,
              // height: "100%",
              borderTopRightRadius: Platform.OS === "android" ? 45 : 60,
              borderTopLeftRadius: Platform.OS === "android" ? 45 : 60,
              backgroundColor: "#fff",
            }}>
            <View
              style={[
                globalStyle.pageContainer,
                {
                  marginTop: 45,
                },
              ]}>
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    fontFamily: "Nunito-ExtraBold",
                    fontSize: 20,
                    color: "#000",
                  }}>
                  Why A Short-Term Melt-Up Seems Likely Here - Seeking Alpha
                </Text>
              </View>
              {/* {news.fetched && <WebView source={{ uri: "https://www.freerepublic.com/focus/f-chat/3866263/posts" }} />} */}

              <View
                style={{
                  marginBottom: 30,
                }}>
                {news.fetched && (
                  <Text
                    style={{
                      color: "#000",
                      lineHeight: 30,
                      fontSize: 14,
                    }}>
                    {news.data.content}
                  </Text>
                )}
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "#DDDDDD",
                    alignItems: "center",
                  }}>
                  <Text
                    style={{
                      color: "#fff",
                    }}>
                    View More
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  marginTop: 30,
                  marginBottom: 25,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Nunito-ExtraBold",
                    color: "#000",
                  }}>
                  Related
                </Text>
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
          }}
          style={[globalStyle.mb20]}>
          <Featureds />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default DetailsScreen;
