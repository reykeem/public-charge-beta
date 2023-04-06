import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import ChargingStation from "./ChargingStation";
import { LocationData } from "./UserLocation";

interface ChargersProps {
  location: LocationData;
}

function Chargers({ location }: ChargersProps) {
  const [chargingStations, setChargingStations] = useState<any>([]);

  const findChargingStations = () => {
    const apiKey = "3f058589-7ebf-4c27-8112-4f2910a1b8a5";
    const latitude = location.latitude;
    const longitude = location.longitude;
    console.log(latitude, longitude);
    const url = `https://api.openchargemap.io/v3/poi/?output=json&latitude=${latitude}&longitude=${longitude}&key=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // const uniqueIds = new Set();
        // const uniqueStations = data.filter((station) => {
        //   if (uniqueIds.has(station.ID)) {
        //     return false;
        //   } else {
        //     uniqueIds.add(station.ID);
        //     return true;
        //   }
        // });
        setChargingStations(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {}, [chargingStations]);

  const renderCharger = ({ item }: { item: any }) => {
    return <ChargingStation charger={item} />;
  };

  return (
    <View>
      <View>
        {chargingStations.length > 0 ? (
          // chargingStations.map((charger, id) => (
          //   <ChargingStation key={id} charger={charger} />
          <FlatList
            data={chargingStations.slice(0, 50)} // show only the first 10 items
            renderItem={renderCharger}
            keyExtractor={(item) => item.ID.toString()}
            removeClippedSubviews={true} // improves performance by reducing memory usage
          />
        ) : (
          <Pressable
            onPress={findChargingStations}
            style={styles.findChargerButton}
          >
            <Text>Show Nearest Chargers</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  findChargerButton: {
    // flex: 1,
    // // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Chargers;
