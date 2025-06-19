// components/DayToggleButton.js
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function DayToggleButton({ label, selected, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, selected && styles.selected]}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },
  selected: {
    backgroundColor: '#D1F2E0',
    borderColor: '#22643B',
    borderWidth: 1,
  },
});
