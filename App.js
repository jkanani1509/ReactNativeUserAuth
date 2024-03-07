import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SignInScreen         from './assets/src/screens/SignInScreen';
import SignUpScreen         from './assets/src/screens/SignUpScreen/SignUpScreen';
import SignUpConfirmScreen  from './assets/src/screens/SignUpConfirmScreen';
import ForgotPasswordScreen from './assets/src/screens/ForgotPasswordScreen';
import ReSetPassword        from './assets/src/screens/ReSetPasswordScreen';
import Navigation           from './assets/src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    padding: 15
    // alignItems: 'center',
  },
});
