import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the About screen.</Text>
      <Link href="/" style={styles.button}>
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    color: "#EF4444",
    marginTop: 20,
  },
});
