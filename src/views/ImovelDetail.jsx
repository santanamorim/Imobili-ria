import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImovelDetailsScreen from "../components/ImovelDetailsScreen";
import ImovelSpecificationsScreen from "../components/ImovelSpecificationsScreen";
import InfoSellerImovel from "../components/InfoSellerImovel";
import CommentsProduct from "../components/CommentsProduct";
import ProductDoubts from "../components/ProductDoubts";

const Tab = createBottomTabNavigator();

const ImovelDetail = () => {
  const route = useRoute();
  const { product } = route.params;

  return (
    <Tab.Navigator initialRouteName="Detalhes">
      <Tab.Screen
        name="Detalhes"
        component={ImovelDetailsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Especificações"
        component={ImovelSpecificationsScreen}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Vendedor"
        component={InfoSellerImovel}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Comentários"
        component={CommentsProduct}
        initialParams={{ product }}
      />
      <Tab.Screen
        name="Dúvidas"
        component={ProductDoubts}
        initialParams={{ product }}
      />
    </Tab.Navigator>
  );
};

export default ImovelDetail;
