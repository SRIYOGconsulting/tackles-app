import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminLogin from '../../Screens/auth/AdminLogin';
import AdminChangePassword from '../../Screens/auth/AdminChangePassword';


type Props = {};

const Stack = createNativeStackNavigator();

const AdminNavigation = (_props: Props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="AdminLoginScreen" component={AdminLogin} />
            <Stack.Screen name="AdminChangePasswordScreen" component={AdminChangePassword} />
        </Stack.Navigator>
    );
};

export default AdminNavigation;
