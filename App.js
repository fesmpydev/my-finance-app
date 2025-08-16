// App.js
import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import AppContextProvider, { AppContext } from "./src/context/AppContext";
import ThemeProvider from "./src/theme/ThemeProvider";
import HomeScreen from "./src/screens/HomeScreen";
import IncomeScreen from "./src/screens/IncomeScreen";
import ExpenseScreen from "./src/screens/ExpenseScreen";

const Stack = createStackNavigator();

// Mantener el splash screen visible hasta que los datos se carguen
SplashScreen.preventAutoHideAsync();

// Componente interno para manejar la lógica del splash screen
const AppContent = () => {
  const { isLoading } = useContext(AppContext);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Balance Financiero" }}
        />
        <Stack.Screen
          name="Income"
          component={IncomeScreen}
          options={{ title: "Registrar Ingreso" }}
        />
        <Stack.Screen
          name="Expense"
          component={ExpenseScreen}
          options={{ title: "Registrar Egreso" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <ThemeProvider>
        {({ theme }) => (
          <PaperProvider theme={theme}>
            <AppContent />
          </PaperProvider>
        )}
      </ThemeProvider>
    </AppContextProvider>
  );
}
