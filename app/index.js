import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

const image = require("../assets/movie.jpeg");

const movieList = [
  {
    title: "A Lista de Schindler",
    subTitle:
      "Um retrato poderoso do Holocausto, com atuações marcantes e uma história emocionante sobre a humanidade em tempos de guerra.",
    image: require("../assets/schindler.jpeg"),
  },
  {
    title: "O Poderoso Chefão",
    subTitle:
      "Uma obra-prima do cinema que explora a vida de uma família mafiosa, com personagens complexos e uma narrativa envolvente.",
    image: require("../assets/godfather.jpeg"),
  },
  {
    title: "Pulp Fiction",
    subTitle:
      "Um filme cult de Quentin Tarantino, com diálogos afiados, humor negro e uma narrativa não linear que desafia as convenções do cinema.",
    image: require("../assets/pulp.jpeg"),
  },
  {
    title: "O Senhor dos Anéis",
    subTitle:
      "A primeira parte da épica trilogia de J.R.R. Tolkien, com visuais deslumbrantes, personagens cativantes e uma história emocionante sobre o bem contra o mal.",
    image: require("../assets/rings.jpeg"),
  },
  {
    title: "Titanic",
    subTitle:
      "Uma história de amor épica ambientada no naufrágio do Titanic, com efeitos especiais impressionantes e atuações memoráveis.",
    image: require("../assets/titanic.jpeg"),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Lista de Filmes</Text>
        <Image source={image} style={styles.image} />
        {movieList.map((item, index) => {
          return (
            <View style={{ paddingVertical: 10 }} key={index}>
              <Pressable
                style={styles.button}
                onPress={() =>
                  router.push({
                    pathname: "details",
                    params: {
                      title: item.title,
                      subTitle: item.subTitle,
                      image: item.image,
                    },
                  })
                }
              >
                <Text style={styles.text}>{item.title}</Text>
              </Pressable>
            </View>
          );
        })}
        <StatusBar style="auto" />
      </ScrollView>
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
    paddingVertical: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
