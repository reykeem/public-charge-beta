import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Chargers from "./Components/Chargers";
import UserLocation from "./Components/UserLocation";

export default function App() {
  return (
    <View style={styles.container}>
      <UserLocation />
      {/* <Chargers /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
