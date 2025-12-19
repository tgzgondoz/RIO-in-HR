import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Start animations immediately
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    // Simulate app initialization tasks
    const initializeApp = async () => {
      try {
        // In production, you would perform actual initialization here:
        // 1. Check authentication state
        // 2. Load essential configuration
        // 3. Initialize services/APIs
        // 4. Check for updates
        await Promise.all([
          // Simulate network/async tasks
          new Promise(resolve => setTimeout(resolve, 1500)),
        ]);

        // Navigate based on authentication state
        // For now, always go to Login - you would replace with actual auth check
        navigation.replace('Login');
        
        // Example for actual auth check:
        // const isAuthenticated = await checkAuthToken();
        // navigation.replace(isAuthenticated ? 'MainApp' : 'Login');
        
      } catch (error) {
        console.error('Initialization error:', error);
        // Handle error gracefully - maybe show error screen or retry
        navigation.replace('Login'); // Fallback navigation
      }
    };

    initializeApp();
  }, [navigation, fadeAnim, scaleAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#1a237e"
        barStyle="light-content"
        animated={true}
      />
      
      <View style={styles.background}>
        {/* Decorative elements */}
        <View style={styles.circle1} />
        <View style={styles.circle2} />
        
        <Animated.View 
          style={[
            styles.content,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>R</Text>
            </View>
            <Text style={styles.title}>RIO-HR</Text>
          </View>
          
          <Text style={styles.subtitle}>Intelligent Hiring Platform</Text>
          <Text style={styles.tagline}>Connecting Talent with Opportunity</Text>
          
          {/* Loading indicator with status */}
          <View style={styles.loadingContainer}>
            <ActivityIndicator 
              size="large" 
              color="#FFFFFF" 
              style={styles.spinner}
            />
            <Text style={styles.loadingText}>Initializing secure platform...</Text>
            <View style={styles.progressBar}>
              <Animated.View 
                style={[
                  styles.progressFill,
                  {
                    width: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            </View>
          </View>
        </Animated.View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 RIO-HR Technologies</Text>
        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a237e',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a237e',
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    top: -100,
    left: -100,
  },
  circle2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    bottom: -80,
    right: -80,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: 'white',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: '600',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 50,
    fontStyle: 'italic',
  },
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  spinner: {
    marginBottom: 20,
  },
  loadingText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  progressBar: {
    width: '80%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4fc3f7',
    borderRadius: 2,
  },
  footer: {
    paddingBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    marginBottom: 5,
  },
  version: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 11,
  },
});

export default SplashScreen;