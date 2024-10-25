import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import IntroScreen01 from "../screens/IntroScreen01"
import IntroScreen02 from "../screens/IntroScreen02"
import LoginScreen from "../screens/LoginScreen"

type RootStackParamsList = {
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LoginScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();

export type RootStackScreenProps<T extends keyof RootStackParamsList> = NativeStackScreenProps<RootStackParamsList, T>;

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="IntroScreen01" component={IntroScreen01}/>
      <RootStack.Screen name="IntroScreen02" component={IntroScreen02}/>
      <RootStack.Screen name="LoginScreen" component={LoginScreen}/>
    </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
