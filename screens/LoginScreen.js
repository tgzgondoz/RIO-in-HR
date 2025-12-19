import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RIO-IN-HR Login</Text>
      <Button 
        title="Login as Candidate" 
        onPress={() => navigation.navigate('CandidateFlow')}
      />
      <Button 
        title="Login as Agent" 
        onPress={() => navigation.navigate('AgentFlow')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
});