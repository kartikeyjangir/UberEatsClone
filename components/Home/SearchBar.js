import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SearchBar() {
  return (
    <View style={{ flexDirection: "row", marginTop: 15 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 15,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10, color: "red" }}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          );
        }}
        renderRightButton={() => {
          return (
            <View
              style={{
                backgroundColor: "#fff",
                flexDirection: "row",
                paddingHorizontal: 20,
                marginRight: 10,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <AntDesign name="clockcircle" size={16} />
              <Text style={{ marginLeft: 10 }}>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
