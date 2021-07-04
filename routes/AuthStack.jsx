import React from "react";
import Login from "../screens/login/Login";
import Register from "../screens/register/Register";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;