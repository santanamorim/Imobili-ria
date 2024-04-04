import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import React from "react";
import ImovelDetail from "../views/ImovelDetail";
import ImovelList from "../views/ImovelList";

const Stack = createStackNavigator();

const ImovelListNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName="ImovelList">
        <Stack.Screen
          name="ImovelList"
          component={ImovelList}
          options={{ title: "Lista de Imóveis" }}
        />
        <Stack.Screen
          name="ImovelDetail"
          component={ImovelDetail}
          options={{ title: "Lista de Imóveis" }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
export default ImovelListNavigation;