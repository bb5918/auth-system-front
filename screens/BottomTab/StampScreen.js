import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function StampScreen() {
  return (
    <View style={styles.container}>
      <Text>달력/스탬프 등</Text>
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

export default StampScreen;
