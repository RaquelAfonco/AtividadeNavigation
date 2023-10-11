// Router.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import TelaA from '../screens/TelaA/TelaA';
import TelaB from '../screens/TelaB/TelaB';


const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="TelaB">
        <Tab.Screen
          name="Usuários"
          component={TelaA}
          options={{
            tabBarLabel: 'TELA A',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="arrow-back-circle-outline" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Posts"
          component={TelaB}
          options={{
            tabBarLabel: 'TELA B',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="arrow-forward-circle-outline" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
