import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInputAutoComplete } from './src/components/TextInputAutoComplete';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <TextInputAutoComplete />
        <StatusBar style="auto" />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
