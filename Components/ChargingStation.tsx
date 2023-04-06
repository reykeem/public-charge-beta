import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import StationModal from "./StationModal";
import { ChargingStationProps } from "./types/types";

// const LazyLoadModal = React.lazy(() => import('./StationModal'));

function ChargingStation({ charger }: ChargingStationProps) {
  const [modal, toggleModal] = useState<boolean>(false);

  return (
    <Pressable style={styles.charger} onPress={() => toggleModal(true)}>
      <Text>{charger.AddressInfo.Title}</Text>
      <Text>{charger.AddressInfo.Distance.toFixed(2)} mi</Text>
      <StationModal modal={modal} toggleModal={toggleModal} charger={charger} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  charger: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ChargingStation;
