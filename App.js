import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator();

// Basic placeholder components in case imports fail
const PlaceholderScreen = ({ title }) => (
  <View style={placeholderStyles.container}>
    <Text style={placeholderStyles.title}>{title}</Text>
    <Text>Screen will be loaded soon...</Text>
  </View>
);

// Home Screen Component
function HomeScreen({ navigation }) {
  const screens = [
    { name: 'Login', component: 'LoginScreen' },
    { name: 'Candidate Pipeline', component: 'CandidatePipelineScreen' },
    { name: 'Candidate Profile', component: 'CandidateProfileScreen' },
    { name: 'Job Matching', component: 'JobMatchingScreen' },
    { name: 'Notifications', component: 'NotificationsScreen' },
    { name: 'Settings', component: 'SettingsScreen' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>RIO-IN-HR App</Text>
      <Text style={styles.subtitle}>All 5 Features Ready for Implementation:</Text>
      
      <View style={styles.feature}>
        <Text>1. Secure Candidate Profiling ✓</Text>
      </View>
      <View style={styles.feature}>
        <Text>2. AI-Powered ATS Scoring ✓</Text>
      </View>
      <View style={styles.feature}>
        <Text>3. Intelligent Role Matching ✓</Text>
      </View>
      <View style={styles.feature}>
        <Text>4. Real-Time Agent Alerts ✓</Text>
      </View>
      <View style={styles.feature}>
        <Text>5. Agent Tracking Dashboard ✓</Text>
      </View>
      
      <Text style={styles.navigationTitle}>Navigation to All Screens:</Text>
      
      {screens.map((screen, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navButton}
          onPress={() => navigation.navigate(screen.name)}
        >
          <Text style={styles.navButtonText}>{index + 1}. {screen.name}</Text>
        </TouchableOpacity>
      ))}
      
      <Text style={styles.note}>All screen files are in /screens folder</Text>
    </ScrollView>
  );
}

export default function App() {
  // Try to import screens dynamically with fallbacks
  let LoginScreen, CandidatePipelineScreen, CandidateProfileScreen, JobMatchingScreen, NotificationsScreen, SettingsScreen;

  try {
    LoginScreen = require('./screens/LoginScreen').default;
  } catch {
    LoginScreen = () => <PlaceholderScreen title="Login" />;
  }

  try {
    CandidatePipelineScreen = require('./screens/CandidatePipelineScreen').default;
  } catch {
    CandidatePipelineScreen = () => <PlaceholderScreen title="Candidate Pipeline" />;
  }

  try {
    CandidateProfileScreen = require('./screens/CandidateProfileScreen').default;
  } catch {
    CandidateProfileScreen = () => <PlaceholderScreen title="Candidate Profile" />;
  }

  try {
    JobMatchingScreen = require('./screens/JobMatchingScreen').default;
  } catch {
    JobMatchingScreen = () => <PlaceholderScreen title="Job Matching" />;
  }

  try {
    NotificationsScreen = require('./screens/NotificationsScreen').default;
  } catch {
    NotificationsScreen = () => <PlaceholderScreen title="Notifications" />;
  }

  try {
    SettingsScreen = require('./screens/SettingsScreen').default;
  } catch {
    SettingsScreen = () => <PlaceholderScreen title="Settings" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'RIO-IN-HR Dashboard' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Candidate Pipeline" 
          component={CandidatePipelineScreen} 
          options={{ title: 'Candidate Pipeline' }}
        />
        <Stack.Screen 
          name="Candidate Profile" 
          component={CandidateProfileScreen} 
          options={{ title: 'Candidate Profile' }}
        />
        <Stack.Screen 
          name="Job Matching" 
          component={JobMatchingScreen} 
          options={{ title: 'Job Matching' }}
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
          options={{ title: 'Notifications' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2196F3',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  feature: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  navigationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    color: '#2196F3',
  },
  navButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    marginTop: 30,
    marginBottom: 40,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
  },
});

const placeholderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});