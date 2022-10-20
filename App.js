import { NavigationContainer } from "@react-navigation/native";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <LoginScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
