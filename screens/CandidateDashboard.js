// screens/CandidateDashboard.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CandidateDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidate Dashboard</Text>
      <Text>Welcome to your dashboard!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});