import React, { useState, useEffect, useCallback } from "react";
import LottieView from "lottie-react-native";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
  RefreshControl,
} from "react-native";
import AnimatedLoader from "react-native-animated-loader";

import globalStyle from "../styles/globalStyle";
import NewsCard from "../components/NewsCard";
import { getHeadlines } from "../utils";

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const DynamicScreen = ({ name, navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [news, setNews] = useState({
    fetched: false,
    data: [],
    error: null,
  });

  const handleNavigation = (data) => {
    navigation.navigate("Details", {
      tabName: name,
      data: data,
    });
  };

  const getNews = useCallback(async () => {
    try {
      const response = await getHeadlines(
        "us",
        name.toLowerCase() === "world" ? "general" : name
      );

      setNews({ fetched: true, data: [...response.data.articles], error: null });
    } catch (err) {
      setNews({ fetched: true, data: [], error: err.message });
      console.log("ERRRRRRRRRRR", err.message);
    }
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(5000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      {!news.fetched && (
        <AnimatedLoader
          visible={!news.fetched}
          overlayColor='rgba(255,255,255,0.75)'
          source={require("../resources/loader.json")}
          animationStyle={styles.lottie}
          speed={1}
        />
      )}
      {news.fetched && news.error === null && news.data.length > 0 && (
        <View
          style={[
            globalStyle.pageContainer,
            {
              flex: 1,
            },
          ]}>
          <Text>{name}</Text>

          {news.fetched && (
            <FlatList
              data={news.data}
              keyExtractor={(item) => item.index}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              renderItem={({ item }) => {
                return <NewsCard data={item} handlePress={handleNavigation} />;
              }}
            />
          )}
        </View>
      )}

      {news.fetched && news.error === null && news.data.length === 0 && (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
          <Text
            style={{
              marginTop: 100,
              fontSize: 20,
            }}>
            Sorry, couldn't find anything
          </Text>
          <LottieView source={require("../resources/empty-box.json")} autoPlay loop />
        </View>
      )}

      {news.fetched && news.error && (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              marginTop: 100,
              fontSize: 20,
            }}>
            An error occured.
          </Text>
          <LottieView
            source={require("../resources/error-animation.json")}
            autoPlay
            loop
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default DynamicScreen;
