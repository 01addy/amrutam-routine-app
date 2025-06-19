// App.js
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutDeveloper from './screens/AboutDeveloper';
import Dashboard from './screens/Dashboard';

import AssignCaregiver from './screens/AssignCaregiver';
import BasicDetails from './screens/BasicDetails';
import FinalSummary from './screens/FinalSummary';
import ReminderChannels from './screens/ReminderChannels';
import ReminderItems from './screens/ReminderItems';
import WeeklyBenefits from './screens/WeeklyBenefits';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RoutineFlowStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#22643B' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
      initialRouteName="Dashboard"
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Basic Details" component={BasicDetails} />
      <Stack.Screen name="Reminder Items" component={ReminderItems} />
      <Stack.Screen name="Reminder Channels" component={ReminderChannels} />
      <Stack.Screen name="Assign Caregiver" component={AssignCaregiver} />
      <Stack.Screen name="Weekly Benefits" component={WeeklyBenefits} />
      <Stack.Screen name="Final Summary" component={FinalSummary} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#22643B',
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Routine Flow" component={RoutineFlowStack} />
        <Drawer.Screen name="About the Developer" component={AboutDeveloper} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
