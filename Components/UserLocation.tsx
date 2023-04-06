import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { StyleSheet, Text, View } from "react-native";
import Chargers from "./Chargers";

export interface LocationData {
  latitude: number;
  longitude: number;
}

function UserLocation() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // Handle permissions not granted error
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocationData({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <View>
      {locationData ? (
        <>
          <Chargers location={locationData} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  findChargerButton: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserLocation;
