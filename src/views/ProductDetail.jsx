import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductDetailsScreen from "../components/ProductDetailsScreen";
import ProductSpecificationsScreen from "../components/ProductSpecificationsScreen";
import InfoSellerProduct from "../components/InfoSellerProduct";

const Tab = createBottomTabNavigator();

const ProductDetail = () => {
  const route = useRoute();
  const { product } = route.params;

  console.log(product);
  return (
    <Tab.Navigator initialRouteName="Detalhes">
      <Tab.Screen
        name="Detalhes"
        component={ProductDetailsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Especificações"
        component={ProductSpecificationsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Vendedor"
        component={InfoSellerProduct}
        initialParams={{ product }}
      />
    </Tab.Navigator>
  );
};

export default ProductDetail;