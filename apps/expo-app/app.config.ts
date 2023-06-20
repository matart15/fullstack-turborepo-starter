import type { ExpoConfig } from '@expo/config';

const SUPABASE_URL = 'https://yzyhbsptvxemqbrpipnx.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6eWhic3B0dnhlbXFicnBpcG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5NjAxOTYsImV4cCI6MjAwMjUzNjE5Nn0.tdFgzyCW3u5uEkNn52tD9tVtoaxDGNPY_VIxO9oBcEA';
if (typeof SUPABASE_URL !== 'string' || typeof SUPABASE_ANON_KEY !== 'string') {
  throw new Error('Missing Supabase URL or anonymous key');
}
const defineConfig = (): ExpoConfig => ({
  name: 'expo',
  slug: 'expo',
  scheme: 'expo',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/icon.png',
    resizeMode: 'contain',
    backgroundColor: '#1F104A',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],

  jsEngine: 'hermes',
  ios: {
    jsEngine: 'jsc',
    supportsTablet: true,
    bundleIdentifier: 'your.bundle.identifier',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/icon.png',
      backgroundColor: '#1F104A',
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
