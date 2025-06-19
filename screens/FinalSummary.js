// screens/FinalSummary.js
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import RoutineSummaryBlock from '../components/RoutineSummaryBlock';
import { saveRoutine } from '../utils/storage';

export default function FinalSummary({ navigation, route }) {
  const {
    patient,
    routineData,
    reminders,
    reminderChannels,
    caregiver,
    weeklyBenefits,
  } = route.params;

  const handleSubmit = async () => {
    const finalRoutine = {
      patient,
      routineData,
      reminders,
      reminderChannels,
      caregiver,
      weeklyBenefits,
      createdAt: new Date().toISOString(),
    };

    await saveRoutine(finalRoutine);
    Alert.alert('Success', 'Routine created successfully!');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="Final Summary" />

      <RoutineSummaryBlock title="Patient">
        <Text>Name: {patient.name}</Text>
      </RoutineSummaryBlock>

      <RoutineSummaryBlock title="Routine Details">
        <Text>Name: {routineData.name}</Text>
        <Text>Category: {routineData.category}</Text>
        <Text>Duration: {routineData.duration} weeks</Text>
        {routineData.description.map((line, i) => (
          <Text key={i}>• {line}</Text>
        ))}
      </RoutineSummaryBlock>

      <RoutineSummaryBlock title="Reminders">
        {reminders.map((item, i) => (
          <View key={i} style={styles.reminder}>
            <Text>{item.name} ({item.type})</Text>
            <Text>{item.quantity} {item.unit} at {item.timeSlot}</Text>
            <Text>Days: {item.days.join(', ')}</Text>
          </View>
        ))}
      </RoutineSummaryBlock>

      <RoutineSummaryBlock title="Channels">
        {reminderChannels.whatsapp ? <Text>WhatsApp: {reminderChannels.whatsapp}</Text> : null}
        {reminderChannels.sms ? <Text>SMS: {reminderChannels.sms}</Text> : null}
        {reminderChannels.email ? <Text>Email: {reminderChannels.email}</Text> : null}
        {reminderChannels.googleCal ? <Text>Google Cal: {reminderChannels.googleCal}</Text> : null}
      </RoutineSummaryBlock>

      <RoutineSummaryBlock title="Caregiver">
        <Text>Name: {caregiver.name}</Text>
        <Text>Email: {caregiver.email}</Text>
        <Text>Mobile: {caregiver.mobile}</Text>
      </RoutineSummaryBlock>

      <RoutineSummaryBlock title="Weekly Benefits">
        {weeklyBenefits.map((b, i) => (
          <Text key={i}>Week {i + 1}: {b}</Text>
        ))}
      </RoutineSummaryBlock>

      <PrimaryButton label="Submit Routine" onPress={handleSubmit} />
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
  reminder: {
    marginBottom: 10,
    paddingLeft: 6,
  },
});
