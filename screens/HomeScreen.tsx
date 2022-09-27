import { Alert } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { useState, useEffect } from "react";
import { useNhostClient } from "@nhost/react";

import MasonryList from "../components/MasonryList";
import Pin from "../components/Pin";

// import pins from "../assets/data/pins";

function HomeScreen() {
  const nhost = useNhostClient();
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false); 

  const fetchPins = async () => {
    setLoading(true);
    const response = await nhost.graphql.request(`
      query MyQuery {
        pins {
          created_at
          id
          image
          title
          user_id
        }
      }
    `);

    if (response.error) {
      Alert.alert("Error fetching pins");
    } else {
      setPins(response.data.pins);
    }
    setLoading(false);
  };

  useEffect(() => {
    (async() => await fetchPins())();
  }, []);

  return ( 
    <MasonryList 
      pins={pins} 
      refreshing={loading} 
      onRefresh={fetchPins} 
    />
  );
}

export default HomeScreen;
