import React, { useState, useEffect, useCallback, Component } from "react";
import LottieView from "lottie-react-native";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import AnimatedLoader from "react-native-animated-loader";

import globalStyle from "../styles/globalStyle";
import NewsCard from "../components/NewsCard";
import { getHeadlines } from "../utils";
import { PAGESIZE } from "../constants";

class DynamicScreen extends Component {
  state = {
    fetched: false,
    page: 1,
    loadingMore: false,
    articles: [],
    totalResults: 0,
    hasError: false,
    error: null,
  };

  componentDidMount() {
    this._getNewsHeadlines();
  }

  _renderFooterComponent = () => {
    if (this.state.loadingMore) {
      return (
        <View
          style={{
            position: "relative",
            width: "100%",
            paddingVertical: 20,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <ActivityIndicator animating size='large' />
        </View>
      );
    }

    return null;
  };

  _handleNavigation = (data) => {
    this.props.navigation.navigate("Details", {
      tabName: this.props.name,
      data: data,
    });
  };

  _handleLoadMore = () => {
    if (this.state.loadingMore) return;

    if (Math.floor(this.state.totalResults / PAGESIZE) === this.state.page) return;

    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this._getNewsHeadlines();
      }
    );
  };

  _getNewsHeadlines = () => {
    getHeadlines(
      "us",
      this.props.name.toLowerCase() === "world" ? "general" : this.props.name,
      this.state.page
    )
      .then((response) => {
        if (this.state.page !== 1) {
          console.log(response.data.articles[0]);
        }
        this.setState((prevState, nextProps) => ({
          ...prevState,
          fetched: true,
          articles:
            this.state.page === 1
              ? [...response.data.articles]
              : [...prevState.articles, ...response.data.articles],
          loadingMore: false,
          totalResults: response.data.totalResults,
          error: null,
        }));
      })
      .catch((error) => {
        console.log("ERRRRRRR", error);
      });
  };

  render() {
    const { fetched, articles, hasError } = this.state;
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        {!fetched && (
          <AnimatedLoader
            visible={!fetched}
            overlayColor='rgba(255,255,255,0.75)'
            source={require("../resources/loader.json")}
            animationStyle={styles.lottie}
            speed={1}
          />
        )}

        {fetched && !hasError && articles.length > 0 && (
          <View
            style={[
              globalStyle.pageContainer,
              {
                flex: 1,
              },
            ]}>
            {fetched && (
              <FlatList
                data={articles}
                keyExtractor={(item, index) => index.toString() + this.props.name}
                renderItem={({ item }) => {
                  return (
                    <NewsCard
                      data={item}
                      handlePress={() => this._handleNavigation(item)}
                    />
                  );
                }}
                onEndReached={this._handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={this._renderFooterComponent}
              />
            )}
          </View>
        )}

        {fetched && !hasError && articles.length === 0 && (
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

        {fetched && hasError && (
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
  }
}

export default DynamicScreen;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
