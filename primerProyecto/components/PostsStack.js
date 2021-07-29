import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Posts from '../components/Posts'
import Comments from '../components/Comments'

const Stack = createStackNavigator();

export default function PostsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="posts"
                component={Posts}
                options={{ title: "Posts" }}
            />
            <Stack.Screen
                name="infoPost"
                component={Comments}
                options={{ title: "Comments" }}
            />
        </Stack.Navigator>
    )
}