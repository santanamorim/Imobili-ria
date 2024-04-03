// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://loja-1ce3e-default-rtdb.firebaseio.com/properties.json"
//         );
//         const data = await response.json();
//         const productList = Object.values(data);
//         setProducts(productList);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleProductPress = (item) => {
//     navigation.navigate("ProductDetail", { product: item });
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => handleProductPress(item)}
//       style={styles.itemContainer}
//     >
//       <Image source={{ uri: item.images[0] }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{item.name}</Text>
//         <Text>{item.description}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {products.map((item, index) => (
//         <View key={index}>{renderItem({ item })}</View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: "5%"
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   itemContainer: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     padding: 10,
//     marginVertical: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     resizeMode: "contain",
//   },
//   textContainer: {
//     flex: 1,
//   },
//   title: {
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
// });

// export default ProductList;






import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://loja-1ce3e-default-rtdb.firebaseio.com/properties.json"
        );
        const data = await response.json();
        const productList = Object.values(data);
        setProducts(productList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProductPress = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleProductPress(item)}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.price}>Preço: R$ {item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {products.map((item, index) => (
        <View key={index}>{renderItem({ item })}</View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "5%",
    paddingTop: 20,
    backgroundColor: "#f9f9f9",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: "#666",
  },
  price: {
    fontWeight: "bold",
    color: "#2ecc71",
    marginTop: 10,
    marginLeft: 10,
  },
});

export default ProductList;
