import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return <ViewImageScreen />;
}
