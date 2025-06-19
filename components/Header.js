// components/Header.js
import { StyleSheet, Text } from 'react-native';

export default function Header({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#22643B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
});
