// screens/Dashboard.js
import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import Header from '../components/Header';
import RoutineCard from '../components/RoutineCard';
import { getMockPatients } from '../utils/data';

export default function Dashboard({ navigation }) {
  const patients = getMockPatients();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Dashboard',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 10 }}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#22643B',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation]);

  const startRoutine = (patient) => {
    navigation.navigate('Basic Details', { patient });
  };

  return (
    <View style={styles.container}>
      <Header title="Patients Needing Routines" />

      <FlatList
        data={patients}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RoutineCard patient={item} onPress={startRoutine} />
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9F5EC',
    flex: 1,
    padding: 20,
    paddingBottom: 80,
  },
});
