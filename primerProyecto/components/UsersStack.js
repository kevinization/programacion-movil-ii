import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Users from '../components/Users'
import InfoUser from '../components/InfoUser'

const Stack = createStackNavigator();

export default function UsersStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="usuario"
                component={Users}
                options={{ title: "Users" }}
            />
            <Stack.Screen
                name="infoUser"
                component={InfoUser}
                options={{ title: "User" }}
            />
        </Stack.Navigator>
    )
}