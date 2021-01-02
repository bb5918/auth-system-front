import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function RecomScreen() {
  return (
    <View style={styles.container}>
      <Text>스터디메이트 추천/찾기</Text>
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

export default RecomScreen;
