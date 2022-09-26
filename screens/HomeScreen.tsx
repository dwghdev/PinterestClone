import { StyleSheet, FlatList, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import { View } from "../components/Themed";

import MasonryList from "../components/MasonryList";
import Pin from "../components/Pin";

import pins from "../assets/data/pins";

function HomeScreen() {
  return <MasonryList pins={pins} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});

export default HomeScreen;
