import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Login after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>RIO-IN-HR</Text>
        <Text style={styles.subtitle}>Intelligent Hiring Platform</Text>
        <ActivityIndicator size="large" color="#2196F3" style={{ marginTop: 30 }} />
      </View>
      <Text style={styles.footer}>Loading your experience...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    fontStyle: 'italic',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
});

export default SplashScreen;