import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ImovelListNavigation from "./src/components/ImovelListNavigation";
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
            name="ImovelListNavigation"
            component={ImovelListNavigation}
            options={{ title: "Lista de Imóveis" }}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;