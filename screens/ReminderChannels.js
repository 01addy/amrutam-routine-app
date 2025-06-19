// screens/ReminderChannels.js
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';

import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

import { validateEmail, validatePhone } from '../utils/validators';

export default function ReminderChannels({ navigation, route }) {
  const [whatsapp, setWhatsapp] = useState('');
  const [sms, setSms] = useState('');
  const [email, setEmail] = useState('');
  const [googleCal, setGoogleCal] = useState('');

  const handleNext = () => {
    if (!whatsapp && !sms && !email && !googleCal) {
      Alert.alert('Validation Error', 'Please fill at least one channel.');
      return;
    }

    if (email && !validateEmail(email)) {
      Alert.alert('Invalid Email');
      return;
    }

    if ((whatsapp && !validatePhone(whatsapp)) || (sms && !validatePhone(sms))) {
      Alert.alert('Invalid Phone Number');
      return;
    }

    navigation.navigate('Assign Caregiver', {
      ...route.params,
      reminderChannels: {
        whatsapp,
        sms,
        email,
        googleCal,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Reminder Channels" />

      <InputField
        placeholder="WhatsApp Number"
        value={whatsapp}
        onChangeText={setWhatsapp}
        keyboardType="phone-pad"
      />

      <InputField
        placeholder="SMS Number"
        value={sms}
        onChangeText={setSms}
        keyboardType="phone-pad"
      />

      <InputField
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <InputField
        placeholder="Google Calendar Email"
        value={googleCal}
        onChangeText={setGoogleCal}
        keyboardType="email-address"
      />

      <PrimaryButton label="Next: Assign Caregiver" onPress={handleNext} />
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
