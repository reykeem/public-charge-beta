import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Alert } from "react-native";
import Chargers from "./Chargers";
import { LocationData } from "./types/types";

function UserLocation() {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const findCoords = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Access Error", "Enable Location Services");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocationData({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    findCoords();
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
