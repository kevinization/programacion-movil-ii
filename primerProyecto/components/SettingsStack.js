import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Nuevo from '../components/Nuevo'

const Stack = createStackNavigator();

export default function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="usuario"
                component={Nuevo}
                options={{ title: "Usuario" }}
            />
            <Stack.Screen
                name="info"
                component={Nuevo}
                options={{ title: "Nuevo" }}
            />
        </Stack.Navigator>
    )
}