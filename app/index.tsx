
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigator from "./navigators/RootNavigator";
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Index = () => {

  return (
    <SafeAreaProvider style={styles.container}>
 
        <RootNavigator/>
        <StatusBar style="auto" />

    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default Index;
