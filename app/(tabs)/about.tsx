import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the About screen.</Text>
      <Link href="/" style={styles.button}>
        <ThemedText type="link">Go to home screen!</ThemedText>
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
    marginTop: 20,
  },
});
