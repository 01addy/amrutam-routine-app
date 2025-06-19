// screens/ReminderItems.js
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import DayToggleButton from '../components/DayToggleButton';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import ReminderItemTile from '../components/ReminderItemTile';

import { DAYS_OF_WEEK } from '../constants/daysOfWeek';
import { UNITS } from '../constants/units';

export default function ReminderItems({ navigation, route }) {
  const [itemType, setItemType] = useState('product');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);
  const [reminders, setReminders] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addReminder = () => {
    if (!itemName || !quantity || !unit || !timeSlot || selectedDays.length === 0) {
      Alert.alert('Incomplete Info', 'Fill all fields and select days.');
      return;
    }

    const newReminder = {
      type: itemType,
      name: itemName,
      quantity,
      unit,
      timeSlot,
      days: selectedDays,
    };

    setReminders((prev) => [...prev, newReminder]);
    setItemName('');
    setQuantity('');
    setUnit('');
    setTimeSlot('');
    setSelectedDays([]);
  };

  const handleNext = () => {
    if (reminders.length === 0) {
      Alert.alert('Please add at least one reminder item.');
      return;
    }

    navigation.navigate('Reminder Channels', {
      ...route.params,
      reminders,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // adjust based on header height
    >
      <ScrollView style={styles.container}>
        <Header title="Reminder Items" />

        {/* Type Toggle */}
        <View style={styles.toggleRow}>
          {['product', 'activity'].map((type) => (
            <PrimaryButton
              key={type}
              label={type === 'product' ? 'Product' : 'Activity'}
              onPress={() => setItemType(type)}
              style={[styles.toggleButton, itemType === type && styles.activeToggle]}
            />
          ))}
        </View>

        <InputField
          placeholder={itemType === 'product' ? 'Product Name' : 'Activity Name'}
          value={itemName}
          onChangeText={setItemName}
        />

        <InputField
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
        />

        {/* Unit Buttons */}
        <View style={styles.unitWrap}>
          {UNITS.map((u) => (
            <DayToggleButton
              key={u}
              label={u}
              selected={unit === u}
              onPress={() => setUnit(u)}
            />
          ))}
        </View>

        <InputField
          placeholder="Time Slot (e.g., 8:00 AM, After Meal)"
          value={timeSlot}
          onChangeText={setTimeSlot}
        />

        {/* Days of Week */}
        <View style={styles.daysWrap}>
          {DAYS_OF_WEEK.map((day) => (
            <DayToggleButton
              key={day}
              label={day}
              selected={selectedDays.includes(day)}
              onPress={() => toggleDay(day)}
            />
          ))}
        </View>

        <PrimaryButton label="+ Add Reminder" onPress={addReminder} />

        {reminders.length > 0 && (
          reminders.map((item, index) => (
            <ReminderItemTile key={index} item={item} />
          ))
        )}


        <PrimaryButton label="Next: Reminder Channels" onPress={handleNext} />
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
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  toggleButton: {
    width: '45%',
  },
  activeToggle: {
    backgroundColor: '#1E8144',
  },
  unitWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },
  daysWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
});
