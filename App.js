import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "./views/Login";
import SignUp from "./views/SignUp";

const App = () => {
  
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Iniciar Sesión",
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Crear cuenta"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;