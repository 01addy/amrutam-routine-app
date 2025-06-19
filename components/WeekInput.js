// components/WeekInput.js
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function WeekInput({ week, value, onChange }) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.label}>Week {week}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Expected benefit in Week ${week}`}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22643B',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
