import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import CandidatePipelineScreen from './screens/CandidatePipelineScreen';
import CandidateProfileScreen from './screens/CandidateProfileScreen';
import JobMatchingScreen from './screens/JobMatchingScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import SettingsScreen from './screens/SettingsScreen';

// Create a placeholder screen for any missing imports
const PlaceholderScreen = ({ navigation }) => (
  <></> // Empty component - will be handled by actual screens
);

// Home Dashboard component
function HomeScreen() {
  return <></>; // Empty - will be implemented in actual file
}

const Stack = createNativeStackNavigator();

export default function App() {
  // Use fallbacks for any screens that might not exist yet
  const screens = {
    Splash: SplashScreen || PlaceholderScreen,
    Login: LoginScreen || PlaceholderScreen,
    Home: HomeScreen,
    'Candidate Pipeline': CandidatePipelineScreen || PlaceholderScreen,
    'Candidate Profile': CandidateProfileScreen || PlaceholderScreen,
    'Job Matching': JobMatchingScreen || PlaceholderScreen,
    Notifications: NotificationsScreen || PlaceholderScreen,
    Settings: SettingsScreen || PlaceholderScreen,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={screens.Splash} />
        <Stack.Screen name="Login" component={screens.Login} />
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen name="Candidate Pipeline" component={screens['Candidate Pipeline']} />
        <Stack.Screen name="Candidate Profile" component={screens['Candidate Profile']} />
        <Stack.Screen name="Job Matching" component={screens['Job Matching']} />
        <Stack.Screen name="Notifications" component={screens.Notifications} />
        <Stack.Screen name="Settings" component={screens.Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}