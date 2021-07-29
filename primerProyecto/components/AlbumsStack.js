import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Albums from '../components/Albums'
import Photos from '../components/Photos'
import InfoPhoto from './InfoPhoto';

const Stack = createStackNavigator();

export default function AlbumsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="albums"
                component={Albums}
                options={{ title: "Albums" }}
            />
            <Stack.Screen
                name="infoAlbum"
                component={Photos}
                options={{ title: "Photos" }}
            />
            <Stack.Screen
                name="infoPhoto"
                component={InfoPhoto}
                options={{ title: "Photo" }}
            />
        </Stack.Navigator>
    )
}