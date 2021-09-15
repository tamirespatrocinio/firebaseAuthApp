import * as React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import Firebase from "../../FirebaseConfig";

export default function Home() {
  Firebase.auth()
    .signOut()
    .then(() => {})
    .catch((error) => {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
