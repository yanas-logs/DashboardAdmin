import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { COLORS } from '../src/theme/colors';
import { CustomInput } from '../src/components/CustomInput';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen = ({ onLoginSuccess }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    if (email === 'admin@layto.com' && password === 'admin123') {
      onLoginSuccess();
    } else {
      Alert.alert('Failed', 'The email or password you entered is incorrect.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        <View style={styles.headerArea}>
          <Text style={styles.logoText}>LAYTO</Text>
          <Text style={styles.subTitle}>Inventory Management System</Text>
        </View>

        <View style={styles.formArea}>
          <CustomInput
            label="Administrator Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Sign In to Panel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerArea: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: 2,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
    fontWeight: '500',
  },
  formArea: {
    backgroundColor: COLORS.surface,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    // Note: Elevation works on Android for shadow effects
    elevation: 4,
  },
  button: {
    height: 48,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.surface,
    fontWeight: '600',
  },
});
