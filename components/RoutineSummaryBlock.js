// components/RoutineSummaryBlock.js
import { StyleSheet, Text, View } from 'react-native';

export default function RoutineSummaryBlock({ title, children }) {
  return (
    <View style={styles.block}>
      <Text style={styles.heading}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 25,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22643B',
    marginBottom: 8,
  },
});
