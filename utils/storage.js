// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const ROUTINES_KEY = '@amrutam_routines';

export const saveRoutine = async (routine) => {
  try {
    const existing = await AsyncStorage.getItem(ROUTINES_KEY);
    const parsed = existing ? JSON.parse(existing) : [];
    parsed.push(routine);
    await AsyncStorage.setItem(ROUTINES_KEY, JSON.stringify(parsed));
  } catch (e) {
    console.error('Failed to save routine', e);
  }
};

export const getAllRoutines = async () => {
  try {
    const data = await AsyncStorage.getItem(ROUTINES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load routines', e);
    return [];
  }
};

export const clearRoutines = async () => {
  try {
    await AsyncStorage.removeItem(ROUTINES_KEY);
  } catch (e) {
    console.error('Failed to clear routines', e);
  }
};
