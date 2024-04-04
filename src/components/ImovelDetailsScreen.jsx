import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImovelDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Detalhes sobre o Imóvel</Text>
      <Image source={{ uri: product.images[1] }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    // marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // marginBottom: 10,
  },
  description: {
    textAlign: "center",
  },
});

export default ImovelDetailsScreen;
