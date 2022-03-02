import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <Icon
        icon="home"
        name="Home"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="search"
        name="Browser"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="shopping-bag"
        name="Grocery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="receipt"
        name="Orders"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Icon
        icon="user"
        name="Account"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const Icon = ({ icon, name, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(name)}
      style={{
        alignItems: "center",
      }}
    >
      <FontAwesome5
        name={icon}
        size={25}
        style={{
          color: activeTab === name ? "black" : "gray",
        }}
      />
      <Text
        style={{
          color: activeTab === name ? "black" : "gray",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
