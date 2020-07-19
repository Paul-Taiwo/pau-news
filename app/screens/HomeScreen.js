import React from "react";
import { View, ScrollView, Dimensions, SafeAreaView } from "react-native";

import globalStyle from "../styles/globalStyle";
import Featureds from "../components/Featureds";
import SourcesCard from "../components/SourceCard";
import NewsCard from "../components/NewsCard";

const HomeScreen = () => {
  const Width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#ffffff",
            flex: 1,
            paddingTop: 20,
          }}>
          <ScrollView
            removeClippedSubviews={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 20 - 12,
              paddingLeft: 20,
            }}
            style={[
              globalStyle.mb20,
              {
                width: Width,
              },
            ]}>
            <Featureds />
          </ScrollView>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 20 - 12,
              paddingLeft: 20,
            }}
            style={[globalStyle.mb20]}>
            <SourcesCard />
            <SourcesCard />
            <SourcesCard />
          </ScrollView>
        </View>

        <View
          style={[
            globalStyle.pageContainer,
            {
              backgroundColor: "#f2f2f2",
            },
          ]}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
