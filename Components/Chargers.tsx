import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ChargingStation from "./ChargingStation";
import { ChargersProps, ChargeStation } from "./types/types";
import useFetch from "../hooks";

function Chargers({ location }: ChargersProps) {
  const [chargingStations, setChargingStations] = useState<
    Array<ChargeStation | null>
  >([]);

  const apiKey = "3f058589-7ebf-4c27-8112-4f2910a1b8a5";
  const latitude = location.latitude;
  const longitude = location.longitude;
  const url = `https://api.openchargemap.io/v3/poi/?output=json&latitude=${latitude}&longitude=${longitude}&key=${apiKey}`;
  const { loading, data, error } = useFetch(url);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderCharger = ({ item }: { item: ChargeStation }) => {
    return <ChargingStation charger={item} />;
  };

  useEffect(() => {
    if (data) {
      setChargingStations(data);
    }
  }, [data]);

  return (
    <View style={styles.chargerContainer}>
      <Text style={styles.chargerTitle}>Chargers located in your area:</Text>
      {chargingStations.length > 0 ? (
        <FlatList
          data={chargingStations.slice(0, 20)}
          renderItem={renderCharger}
          keyExtractor={(chargeStation: ChargeStation) =>
            chargeStation.ID.toString()
          }
        />
      ) : (
        ""
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  chargerContainer: {
    alignItems: "center",
  },
  chargerTitle: {
    fontSize: 15,
  },
});

export default Chargers;
