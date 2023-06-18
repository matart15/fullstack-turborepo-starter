import type { ExpoConfig } from "@expo/config";

const SUPABASE_URL = "https://YOUR_PROJECT_REF.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";
if (typeof SUPABASE_URL !== "string" || typeof SUPABASE_ANON_KEY !== "string") {
  throw new Error("Missing Supabase URL or anonymous key");
}
const defineConfig = (): ExpoConfig => ({
  name: "expo",
  slug: "expo",
  scheme: "expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  
  "jsEngine": "hermes",
  ios: {
    "jsEngine": "jsc",
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#1F104A",
    },
  },
  extra: {
    eas: {
      // projectId: "your-project-id",
    },
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
  },
  plugins: [
    // "./expo-plugins/with-modify-gradle.js"
  ],
});

export default defineConfig;