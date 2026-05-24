import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import { COLORS } from './src/theme/colors';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <View style={styles.mainPanel}>
        <Text style={styles.welcomeText}>Welcome to Dashboard Mobile Application!</Text>
        <Text style={styles.subText}>The Inventory System integration phase is ready to proceed.</Text>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  mainPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  logoutBtn: {
    marginTop: 32,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.error,
    borderRadius: 8,
  },
  logoutText: {
    color: COLORS.error,
    fontWeight: '600',
  },
});

export default App;
