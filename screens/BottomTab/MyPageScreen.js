import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function MyPageScreen() {
  return (
    <View style={styles.container}>
      <Text>마이페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  text: {
    fontSize: 22,
  },
});

export default MyPageScreen;
