import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../views/Home';
import Ventures from '../views/Ventures';
import Products from '../views/Products';

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="SOMOS HOJANCHA"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#365314',          
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerBackTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        />
        <Stack.Screen
          name="Ventures"
          component={Ventures}
          options={ ({route}) => ({
            title: route.params.nombre,
            headerStyle: {
              backgroundColor: '#365314'
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerBackTitleStyle: {
              fontWeight: 'bold'
            }
          })}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={ ({route}) => ({
            title: route.params.nombre,
            headerStyle: {
              backgroundColor: '#365314'
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerBackTitleStyle: {
              fontWeight: 'bold'
            }
          })}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
