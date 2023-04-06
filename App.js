import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import UserLocation from "./Components/UserLocation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Public Charge</Text>
      <UserLocation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
  },
});
