import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ThemedView } from "@/components/ThemedView";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
