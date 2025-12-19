// screens/AgentDashboard.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AgentDashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agent Dashboard</Text>
      <Text>Welcome to your agent dashboard!</Text>
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