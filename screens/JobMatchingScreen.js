import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JobMatchingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job Matching</Text>
      <Text>AI-powered job matching screen</Text>
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
  },
});