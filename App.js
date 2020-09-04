import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'MovieList'}>
        <Stack.Screen
          options={{ headerTitle: 'Movies' }}
          name="MovieList"
          component={MovieList}
        />
        <Stack.Screen
          options={{ headerTitle: '' }}
          name="MovieDetails"
          component={MovieDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
