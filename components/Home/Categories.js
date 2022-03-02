import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View style={{ alignItems: "center", marginRight: 30 }} key={index}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
