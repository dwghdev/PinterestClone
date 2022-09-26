import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const Pin = (props) => {
  const { id, image, title } = props.pin;

  const [ratio, setRatio] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  const onLike = () => {};

  const goToPinPage = () => {
    navigation.navigate("Pin", { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />

        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
  },
  title: {
    margin: 5,
    fontSize: 16,
    lineHeight: 22,
    color: "#181818",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  heartBtn: {
    right: 10,
    bottom: 10,
    padding: 5,
    borderRadius: 15,
    position: "absolute",
    backgroundColor: "#D3CFD4",
  },
});

export default Pin;
