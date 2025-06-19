// screens/AssignCaregiver.js
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { validateEmail, validatePhone } from '../utils/validators';

export default function AssignCaregiver({ navigation, route }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleNext = () => {
    if (!name || !email || !mobile) {
      Alert.alert('Please fill all caregiver fields.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email');
      return;
    }

    if (!validatePhone(mobile)) {
      Alert.alert('Invalid Mobile Number');
      return;
    }

    navigation.navigate('Weekly Benefits', {
      ...route.params,
      caregiver: { name, email, mobile },
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView style={styles.container}>
        <Header title="Assign a Caregiver" />

        <InputField placeholder="Caregiver Name" value={name} onChangeText={setName} />
        <InputField placeholder="Caregiver Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <InputField placeholder="Caregiver Mobile" value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />
        <PrimaryButton label="Next: Weekly Benefits" onPress={handleNext} />
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
