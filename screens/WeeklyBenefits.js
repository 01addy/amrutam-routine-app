// screens/WeeklyBenefits.js
import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';

import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import WeekInput from '../components/WeekInput';

export default function WeeklyBenefits({ navigation, route }) {
  const { duration } = route.params.routineData;
  const weeks = parseInt(duration) || 4;

  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const arr = Array(weeks).fill('');
    setBenefits(arr);
  }, [weeks]);

  const handleChange = (text, index) => {
    const updated = [...benefits];
    updated[index] = text;
    setBenefits(updated);
  };

  const handleNext = () => {
    const hasAtLeastOne = benefits.some(b => b.trim().length > 0);
    if (!hasAtLeastOne) {
      Alert.alert('Validation Error', 'Please enter at least one weekly benefit.');
      return;
    }

    navigation.navigate('Final Summary', {
      ...route.params,
      weeklyBenefits: benefits,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Weekly Benefits" />

      {benefits.map((benefit, index) => (
        <WeekInput
          key={index}
          week={index + 1}
          value={benefit}
          onChange={(text) => handleChange(text, index)}
        />
      ))}

      <PrimaryButton label="Next: Final Summary" onPress={handleNext} />
    </ScrollView>
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
