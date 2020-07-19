import React from "react";
import { ScrollView, Text, View, SafeAreaView } from "react-native";
import globalStyle from "../styles/globalStyle";
import NewsCard from "../components/NewsCard";

const DynamicScreen = ({ name, navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Details", {
      tabName: name,
      itemId: 234,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={globalStyle.pageContainer}>
          {/* <Text>{name}</Text> */}

          <View>
            {[...Array(5).keys()].map((x, ind) => {
              return <NewsCard handlePress={handleNavigation} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DynamicScreen;
