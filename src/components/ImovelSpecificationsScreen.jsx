import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductSpecificationsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificações Técnicas</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Preço: R$ {parseFloat(product.price).toFixed(2)}</Text>
      <View style={styles.specificationsContainer}>
        <View style={styles.specificationContainer}>
          <Text style={styles.specificationKey}>Quartos:</Text>
          <Text style={styles.specificationValue}>{product.specs.bedrooms}</Text>
        </View>
        <View style={styles.specificationContainer}>
          <Text style={styles.specificationKey}>Banheiros:</Text>
          <Text style={styles.specificationValue}>{product.specs.bathrooms}</Text>
        </View>
        <View style={styles.specificationContainer}>
          <Text style={styles.specificationKey}>Área:</Text>
          <Text style={styles.specificationValue}>{product.specs.area} m²</Text>
        </View>
        <View style={styles.specificationContainer}>
          <Text style={styles.specificationKey}>Complementos:</Text>
          <Text style={styles.specificationValue}>{product.specs.amenities.join(", ")}</Text>
        </View>
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
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  specificationsContainer: {
    alignItems: "flex-start",
  },
  specificationContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  specificationKey: {
    fontWeight: "bold",
    marginRight: 5,
  },
  specificationValue: {
    marginRight: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "green",
  },
});

export default ProductSpecificationsScreen;
