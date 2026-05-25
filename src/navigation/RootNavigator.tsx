import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { subscribeAuth } from "@/lib/auth";

import { useAuthStore } from "@/store/authStore";

import LoginScreen from "@/screens/LoginScreen";
import DashboardScreen from "@/screens/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { user, loading, setUser, setLoading } =
    useAuthStore();

  useEffect(() => {
    const unsubscribe = subscribeAuth((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}