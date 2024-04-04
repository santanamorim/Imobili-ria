import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CommentsProduct = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dúvidas sobre o Produto</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome do Usuário:</Text>
        <Text style={styles.value}>{product.comments.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data de Publicação:</Text>
        <Text style={styles.value}>{product.comments.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Comentário:</Text>
        <Text style={styles.value}>{product.comments.comment}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nota:</Text>
        <Text style={styles.value}>{product.comments.rating}</Text>
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

export default CommentsProduct;