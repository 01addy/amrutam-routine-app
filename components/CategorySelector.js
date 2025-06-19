// components/CategorySelector.js
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CategorySelector({ value, selected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selected]}
      onPress={() => onPress(value)}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  selected: {
    backgroundColor: '#D1F2E0',
    borderColor: '#22643B',
  },
  text: {
    fontSize: 16,
    color: '#22643B',
  },
});
