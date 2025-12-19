import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CandidateProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Candidate Profile</Text>
      <Text>View and edit candidate profiles here</Text>
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