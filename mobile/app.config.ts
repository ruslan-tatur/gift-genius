import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "gift-genius",
  slug: "gift-genius",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.inforce.giftgenius"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.inforce.giftgenius"
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  extra: {
    eas: {
      projectId: "aa6dc914-e99f-4626-a05d-9fefb23a9aa5"
    }
  },
  plugins: [
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        resizeMode: "cover",
        backgroundColor: "#ffffff",
        imageWidth: 300,
        dark: {
          image: "./assets/images/splash-icon.png",
          resizeMode: "cover",
          backgroundColor: "#000000",
          imageWidth: 300,
        }
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  }
});