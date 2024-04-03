import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import React from "react";
import ProductDetail from "../views/ProductDetail";
import ProductList from "../views/ProductList";

const Stack = createStackNavigator();

const ProductListNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: "Lista de Produtos" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Lista de Produtos" }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default ProductListNavigation;