import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [jokeTitle, setJokeTitle] = useState("");
  const [punchline, setPunchline] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    fetch(
      "https://eloquent-sprite-818b50.netlify.app/.netlify/functions/api/random_joke"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setJokeTitle(json.setup);
        setPunchline(json.punchline);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piadas</Text>
      <Text style={styles.subTitle}>{jokeTitle}</Text>
      <Text style={styles.subTitle}>{punchline}</Text>
      <Button title="Nova Piada" onPress={() => getJoke()} />
      <StatusBar style="auto" />
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
  title: {
    fontSize: 24,
    paddingVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    paddingVertical: 10,
  },
});
