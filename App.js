//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dictionary from './components/Dictionaty';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from "react-redux"
import store from "./store/store.js"


export default function App() {
  return (
    <SafeAreaView >
      <Provider store={store}>
        <View style={styles.container}>
          <Dictionary/>
        </View>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:5
  },

});
