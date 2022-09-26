import { StyleSheet, FlatList, ScrollView } from "react-native";
import { RootTabScreenProps } from "../types";
import { View } from "../components/Themed";

import Pin from "../components/Pin";
import pins from "../assets/data/pins";

function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 1st column */}
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
        {/* 2st column */}
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
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
