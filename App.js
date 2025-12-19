// App.js - Final corrected version
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import existing screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';

// Create a reusable placeholder screen
const createPlaceholderScreen = (screenName) => {
  return function PlaceholderComponent({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
          {screenName}
        </Text>
        <Text style={{ fontSize: 16, color: '#666', marginBottom: 30 }}>
          This screen is under development.
        </Text>
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#1a237e', 
            paddingHorizontal: 30, 
            paddingVertical: 12, 
            borderRadius: 8 
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
};

// Import React Native components
import { View, Text, TouchableOpacity } from 'react-native';

// Create placeholders for screens that don't exist yet
const CandidateDashboard = createPlaceholderScreen('Candidate Dashboard');
const AgentDashboard = createPlaceholderScreen('Agent Dashboard');

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CandidateDashboard" component={CandidateDashboard} />
        <Stack.Screen name="AgentDashboard" component={AgentDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}