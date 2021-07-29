import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsStack from './components/SettingsStack'
import UsersStack from './components/UsersStack'
import PostsStack from './components/PostsStack'
import AlbumsStack from './components/AlbumsStack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lista from './components/Lista'
import Users from './components/Users'
import Posts from './components/Posts'
import Albums from './components/Albums'
import Localizacion from './components/Localizacion';
import Mapa from './components/Mapa';
import Giro from './components/Giro';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuraciones</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Users') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Posts') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Albums') {
              iconName = focused ? 'file-tray-full' : 'file-tray-full-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Users" component={UsersStack} options={{ title: "Users" }} />
        <Tab.Screen name="Posts" component={Giro} options={{ title: "Posts" }} />
        <Tab.Screen name="Albums" component={AlbumsStack} options={{ title: "Albums" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}