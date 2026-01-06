import React, { useEffect, useRef, useState } from "react";
import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../screens/Auth/Splash";
import { CommonActions } from "@react-navigation/native";
import Purpose from "../../screens/Auth/Purpose";
import Permissions from "../../screens/Auth/Permissions";
import GDPR from "../../screens/Auth/GDPR";
import OnbordingScreen from "../../screens/Auth/Onboarding";
import LoginScreen from "../../screens/Auth/Login";
import SignupScreen from "../../screens/Auth/Signup";
import HomeScreen from "../../screens/Main/Home";

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
      {/* <StatusBar translucent backgroundColor="#F1F0F2" barStyle="dark-content" /> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Purpose" component={Purpose} />
        <Stack.Screen name="Permissions" component={Permissions} />
        <Stack.Screen name="GDPR" component={GDPR} />
        <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </>
  );
};
export default AppStack;
