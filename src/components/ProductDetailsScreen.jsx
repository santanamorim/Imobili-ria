import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>Detalhes sobre o Imóvel</Text>
      <Image source={{ uri: product.images[0] }} style={styles.image} />
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
    width: 400,
    height: 400,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
  },
});

export default ProductDetailsScreen;
