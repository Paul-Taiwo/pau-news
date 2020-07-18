import React from "react";
import { View } from "react-native";
import FeaturedCard from "./FeaturedCard";
import Spacer from "./Spacer";

const Featureds = () => {
  return (
    <>
      <FeaturedCard />
      <Spacer right={12} />

      <FeaturedCard />
      <Spacer right={12} />

      <FeaturedCard />
      <Spacer right={12} />

      <FeaturedCard />
      <Spacer right={12} />

      <FeaturedCard />
      <Spacer right={12} />
    </>
  );
};

export default Featureds;
