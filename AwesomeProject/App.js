import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './src/components/RegistrationScreen';

export default function App() {
  return (
    <View>
      <RegistrationScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

