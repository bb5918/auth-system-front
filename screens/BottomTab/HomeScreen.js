import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
const jwtDecode = require("jwt-decode");
const HomeScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      props.navigation.navigate("Login");
    }
    const decoded = jwtDecode(token);
    setFullName(decoded.fullName);
    setEmail(decoded.email);
  };
  const logout = (props) => {
    AsyncStorage.removeItem("token")
      .then(() => {
        props.navigation.replace("Login");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <View style={styles.container}>
      <Text>홈 스크린</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  text: {
    fontSize: 22,
  },
});

export default HomeScreen;
