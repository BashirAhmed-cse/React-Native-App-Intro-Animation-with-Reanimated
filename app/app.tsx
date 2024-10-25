import { NavigationContainer, Theme, DefaultTheme,  DarkTheme,} from '@react-navigation/native';
import Index from './index';
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { useMemo } from "react";

export default function App() {
  // Let's add dark mode
  const colorScheme = useColorScheme();
  const theme: Theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: "#000",
            },
          },
    [colorScheme]
  );
  // Not Working
  return (
    <NavigationContainer theme={theme}>
      <Index />
    </NavigationContainer>
  );
}
