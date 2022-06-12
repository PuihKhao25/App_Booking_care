import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/HomeScreen/Home';
import Login from '../screens/HomeScreen/Login';
import Signup from '../screens/HomeScreen/Signup';
import DetailSpecialty from '../screens/DetaillScreen/DetailSpecialty';
import DetailDoctor from '../screens/DetaillScreen/DetailDoctor';

const Stack = createNativeStackNavigator()

export default function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Home"
            > 
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DetailDoctor" component={DetailDoctor} />
                <Stack.Screen name="DetailSpecialty" component={DetailSpecialty} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}