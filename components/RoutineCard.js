// components/RoutineCard.js
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';

export default function RoutineCard({ patient, onPress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{patient.name}</Text>
      <PrimaryButton label="Create Routine" onPress={() => onPress(patient)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#333',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D3C34',
    marginBottom: 10,
  },
});
