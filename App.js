import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductListNavigation from "./src/components/ProductListNavigation";
import AboutPage from "./src/views/AboutPage";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Drawer.Navigator
          initialRouteName="AboutPage"
          screenOptions={{
            headerShown: true,
            headerTitle: "Imóveis Prime - Imobiliária",
            headerStyle: {
              backgroundColor: "#dddddd",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#000000",
          }}
        >
          <Drawer.Screen
            name="AboutPage"
            component={AboutPage}
            options={{ title: "Home" }}
          />
          <Drawer.Screen
            name="ProductListNavigation"
            component={ProductListNavigation}
            options={{ title: "Lista de Produtos" }}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;