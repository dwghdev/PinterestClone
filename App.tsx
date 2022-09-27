import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { NhostClient, NhostReactProvider } from "@nhost/react";
import SecureStore from "expo-secure-store";

const nhost = new NhostClient({
  subdomain: "ntjqubwcmkrrulnylfuu",
  region: "eu-central-1",
  clientStorageType: SecureStore,
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NhostReactProvider nhost={nhost}>
        <SafeAreaProvider>
          <Navigation colorScheme={null} />
          <StatusBar />
        </SafeAreaProvider>
      </NhostReactProvider>
    );
  }
}
