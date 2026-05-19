import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminLogin from '../../Screens/auth/AdminLogin';
import AdminChangePassword from '../../Screens/auth/AdminChangePassword';
import BookingHistory from '../../Screens/auth/BookingHistory';
import BookingDetails from '../../Screens/auth/BookingDetails'


type Props = {};

const Stack = createNativeStackNavigator();

const AdminNavigation = (_props: Props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="AdminLoginScreen" component={AdminLogin} />
            <Stack.Screen name="AdminChangePasswordScreen" component={AdminChangePassword} />
            <Stack.Screen name="BookingHistoryScreen" component={BookingHistory} />
            <Stack.Screen name="BookingDetailsScreen" component={BookingDetails} />

        </Stack.Navigator>
    );
};

export default AdminNavigation;
