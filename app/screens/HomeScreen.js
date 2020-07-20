import React from "react";
import { View, ScrollView, Dimensions, SafeAreaView } from "react-native";

import globalStyle from "../styles/globalStyle";
import Featureds from "../components/Featureds";
import SourcesCard from "../components/SourceCard";
import NewsCard from "../components/NewsCard";
import { getBgColor } from "../utils";

const dummyData = {
  author: "Thomas Simms",
  content:
    "Coming every Sunday, Hodlers Digest will help you track every single important news story that happened this week. The best (and worst) quotes, adoption and regulation highlights, leading coins, pred… [+9925 chars]",
  description:
    "Top celebrities, politicians and businesses are caught up in a “social engineering attack” on Twitter — with theories swirling around that it could have been an “inside job”",
  publishedAt: "2020-07-19T20:00:00Z",
  source: { id: null, name: "Cointelegraph" },
  title:
    "Twitter Hack Special: $120K Stolen, FBI Investigate, Calls to Ban BTC — Hodler’s Digest, July 13–19 - Cointelegraph",
  url:
    "https://cointelegraph.com/news/twitter-hack-special-120k-stolen-fbi-investigate-calls-to-ban-btc-hodlers-digest-july-1319",
  urlToImage:
    "https://s3.cointelegraph.com/storage/uploads/view/2e5dcabca32d6ad40f68891f7431602c.jpg",
};

const HomeScreen = ({ name, navigation }) => {
  const Width = Dimensions.get("window").width;
  const handleNavigation = () => {
    navigation.navigate("Details", {
      tabName: name,
      itemId: 234,
    });
  };

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
            {[...Array(5).keys()].map((x, ind) => (
              <SourcesCard key={ind} bgColor={getBgColor()} />
            ))}
          </ScrollView>
        </View>

        <View
          style={[
            globalStyle.pageContainer,
            {
              backgroundColor: "#f2f2f2",
            },
          ]}>
          <NewsCard data={dummyData} handlePress={handleNavigation} />
          <NewsCard data={dummyData} handlePress={handleNavigation} />
          <NewsCard data={dummyData} handlePress={handleNavigation} />
          <NewsCard data={dummyData} handlePress={handleNavigation} />
          <NewsCard data={dummyData} handlePress={handleNavigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
