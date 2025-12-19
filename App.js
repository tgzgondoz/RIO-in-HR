import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
      
      <Text style={styles.note}>Create screen files in /screens folder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  feature: {
    backgroundColor: '#e3f2fd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  note: {
    marginTop: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
  },
});