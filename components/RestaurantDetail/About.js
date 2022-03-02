import { View, Text, Image } from "react-native";
import React from "react";

export default function About() {
  const imageLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Ffood&psig=AOvVaw08_6zJblRlpnP1LiEkUyIk&ust=1646324099639000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCEj6vpp_YCFQAAAAAdAAAAABAD";
  const name = "Restatuarnat Name Is the Blan Blah Blah";
  const description = "Thai + Comfort Font $$ 4 ⭐️";
  return (
    <View style={{ paddingBottom: 10 }}>
      <RestuarantImage image={imageLink} />
      <RestuarantName name={name} />
      <RestuarantDescription description={description} />
    </View>
  );
}

const RestuarantImage = (prop) => {
  return (
    <Image
      source={require("../../assets/images/bg1.jpg")}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestuarantName = (prop) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
      }}
    >
      {prop.name}
    </Text>
  );
};

const RestuarantDescription = (prop) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
      }}
    >
      {prop.description}
    </Text>
  );
};
