import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

const BASE_URL = "http://localhost:3000";

function LongTermScreen() {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");

  const onSubmit = (event) => {
    const variables = {
      title: TitleValue,
      description: DescriptionValue,
    };
    Axios.post(`${BASE_URL}/temp/uploadSomething`, variables).then(
      (response) => {
        if (response.data.success) {
          console.log("success");
        } else {
          console.log("false");
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setTitleValue(text)}
        value={TitleValue}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setDescriptionValue(text)}
        value={DescriptionValue}
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>제출</Text>
      </TouchableOpacity>
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

export default LongTermScreen;
