import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDoubts = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dúvidas sobre o Produto</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome do Usuário:</Text>
        <Text style={styles.value}>{product.doubts.user}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data de Publicação:</Text>
        <Text style={styles.value}>{product.doubts.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Dúvida:</Text>
        <Text style={styles.value}>{product.doubts.question}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Resposta do Vendedor:</Text>
        <Text style={styles.value}>{product.doubts.answer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
});

export default ProductDoubts;