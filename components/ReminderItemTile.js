// components/ReminderItemTile.js
import { StyleSheet, Text, View } from 'react-native';

export default function ReminderItemTile({ item }) {
  return (
    <View style={styles.tile}>
      <Text style={styles.name}>{item.name} ({item.type})</Text>
      <Text style={styles.details}>{item.quantity} {item.unit} at {item.timeSlot}</Text>
      <Text style={styles.days}>Days: {item.days.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#22643B',
  },
  name: { fontWeight: 'bold', marginBottom: 4 },
  details: { fontSize: 14 },
  days: { fontSize: 13, color: '#555' },
});
