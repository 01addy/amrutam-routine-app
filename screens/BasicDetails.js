// screens/BasicDetails.js
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';

import CategorySelector from '../components/CategorySelector';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { CATEGORIES } from '../constants/categories';

export default function BasicDetails({ navigation, route }) {
  const [name, setName] = useState('');
  const [desc1, setDesc1] = useState('');
  const [desc2, setDesc2] = useState('');
  const [desc3, setDesc3] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');

  const patient = route.params?.patient;

  const handleNext = () => {
    if (!name || !desc1 || !desc2 || !desc3 || !category || !duration) {
      Alert.alert('Validation Error', 'Please fill all fields.');
      return;
    }

    navigation.navigate('Reminder Items', {
      patient,
      routineData: {
        name,
        description: [desc1, desc2, desc3],
        category,
        duration,
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // adjust based on header height
    >
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
        <Header title="Routine Details" />

        <InputField placeholder="Routine Name" value={name} onChangeText={setName} />
        <InputField placeholder="Point 1" value={desc1} onChangeText={setDesc1} />
        <InputField placeholder="Point 2" value={desc2} onChangeText={setDesc2} />
        <InputField placeholder="Point 3" value={desc3} onChangeText={setDesc3} />
      
        <View style={{ marginTop: 10 }}>
          {CATEGORIES.map((cat) => (
            <CategorySelector
              key={cat}
              value={cat}
              selected={category === cat}
              onPress={setCategory}
            />
          ))}
        </View>

        <InputField
          placeholder="Duration (weeks)"
          value={duration}
          onChangeText={setDuration}
          keyboardType="numeric"
        />

        <PrimaryButton label="Next: Reminder Items" onPress={handleNext} />
      </ScrollView>
    </KeyboardAvoidingView>
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
