import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Chargers from "./Components/Chargers";
import UserLocation from "./Components/UserLocation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Public Charge</Text>
      <UserLocation />
      {/* <Chargers /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  titleText: {
    fontSize: 40,
  },
});
