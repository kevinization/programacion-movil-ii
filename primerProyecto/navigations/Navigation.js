import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersStack from '../components/UsersStack'
import PostsStack from '../components/PostsStack'
import AlbumsStack from '../components/AlbumsStack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../components/Login'

const Tab = createBottomTabNavigator();

export default function Navigation() {
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

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}>
                <Tab.Screen
                    name="Users"
                    component={UsersStack}
                    options={{ title: "Users" }}
                />
                <Tab.Screen
                    name="Posts"
                    component={PostsStack}
                    options={{ title: "Posts" }}
                />
                <Tab.Screen
                    name="Albums"
                    component={AlbumsStack}
                    options={{ title: "Albums" }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}