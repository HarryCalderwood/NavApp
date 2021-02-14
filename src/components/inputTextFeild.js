import * as React from 'react';
import { StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

const InputTextField = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      mode = "outlined"
      style = {styles.textInput}
      placeholder = "Enter email"
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default InputTextField;

const styles = StyleSheet.create({
  textInput: {
  width: "40%"
  },
});