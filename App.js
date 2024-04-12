//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import Dictionary from "./components/Dictionaty";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./store/toggle.js";


export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={styles.container}>
          <Dictionary />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  dark:{
    backgroundColor:"black"
  },
  light:{
    backgroundColor:"white"
  }
});
