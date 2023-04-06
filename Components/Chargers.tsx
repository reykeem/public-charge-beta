import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LocationData } from "./UserLocation";

interface ChargersProps {
  location: LocationData;
}

function Chargers({ location }) {
  const [chargingStations, setChargingStations] = useState<any>([]);

  const findChargingStations = () => {
    const apiKey = "3f058589-7ebf-4c27-8112-4f2910a1b8a5";
    const latitude = location.latitude;
    const longitude = location.longitude;
    console.log(latitude, longitude);
    // fetch();
  };

  return <View></View>;
}

export default Chargers;
