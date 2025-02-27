import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { useAppStyles } from "@/hooks/useAppStyles";

SplashScreen.preventAutoHideAsync()

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  useEffect(() => {
    setTimeout(async () => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  const appStyles = useAppStyles();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider value={theme}>
        <Stack>
          <Stack.Screen name="index" options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: appStyles.backgroundColor,
            },
            headerTintColor: appStyles.textColor,
          }} />
          <Stack.Screen name="filters" options={{ title: 'Filters', headerShown: true }} />
          <Stack.Screen name="product-list" options={{ title: 'Gifts', headerShown: true }} />
        </Stack>
        <StatusBar style="auto" hidden={true} />
      </ThemeProvider>
    </SafeAreaView>
  );
}
