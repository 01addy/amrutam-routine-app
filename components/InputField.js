// components/InputField.js
import { StyleSheet, TextInput } from 'react-native';

export default function InputField({ placeholder, value, onChangeText, ...props }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#888"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
  },
});
