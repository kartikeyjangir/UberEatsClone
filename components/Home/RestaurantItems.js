import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function RestaurantItem({ navigation, restaurantData }) {
  return (
    <View style={{ marginTop: 15 }}>
      {restaurantData.map((restaurant, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginBottom: 15,
              marginHorizontal: 10,
            }}
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
          >
            <Image
              style={{ width: "100%", height: 180 }}
              source={{
                uri: restaurant.image_url,
              }}
            />

            <TouchableOpacity
              style={{
                position: "absolute",
                top: 30,
                right: 25,
                fontSize: 22,
              }}
            >
              <AntDesign name="hearto" size={25} style={{ color: "white" }} />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <View>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "700",
                    fontSize: 20,
                    width: 250,
                  }}
                >
                  {restaurant.name}
                </Text>
                <Text style={{ fontSize: 13, color: "gray" }}>35-40 min</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#eee",
                  fontSize: 22,
                  padding: 15,
                  borderRadius: 100,
                }}
              >
                <Text>{restaurant.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
