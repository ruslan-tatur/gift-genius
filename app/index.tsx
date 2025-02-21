import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import StyledText from '@/components/styled-text';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function Index() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 10000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StyledText>Edit app/index.tsx to edit this screen.</StyledText>
    </View>
  );
}
