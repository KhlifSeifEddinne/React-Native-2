import React from "react";
import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
} from "react-native";

function WelcomeScreen(props) {
  return (
    //<SafeAreaView style={styles.safe}>
    <ImageBackground
      style={styles.background}
      source={require("../assets/saif.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.sText}>UPTIRI!</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>

    //</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  safe: {
    top: 20,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  sText: {
    color: "red",
  },
});

export default WelcomeScreen;
