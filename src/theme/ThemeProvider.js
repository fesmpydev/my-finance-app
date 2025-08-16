import { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { DefaultTheme, DarkTheme } from "react-native-paper";

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return children({ theme });
};

export default ThemeProvider;
