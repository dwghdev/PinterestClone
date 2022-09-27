import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { useState, useEffect } from "react";
import { useNhostClient } from "@nhost/react";
import { useNavigation } from "@react-navigation/native";

import RemoteImage from "./RemoteImage";

const Pin = ({ pin }) => {
  const { id, image, title } = pin;

  const navigation = useNavigation();

  const onLike = () => {
    console.log("like");
  };

  const goToPinPage = () => {
    navigation.navigate("Pin", { id });
  };

  return (
    <Pressable onPress={goToPinPage} style={styles.pin}>
      <View>
        <RemoteImage fileId={image} />
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
