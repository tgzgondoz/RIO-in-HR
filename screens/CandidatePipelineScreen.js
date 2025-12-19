import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CandidatePipelineScreen() {
  return (
    <View style={styles.container}>
      <Text>Candidate Pipeline Screen</Text>
      <Text>Track candidate progress here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});