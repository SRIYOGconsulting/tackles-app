import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const CustomCheckbox = () => {
    const [checked, setChecked] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={{ flexDirection: 'row', alignItems: 'center' }}
        >
            <View
                style={{
                    width: 18,
                    height: 18,
                    borderWidth: 2,
                    borderColor: 'hsl(0, 0%, 70%)',
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: checked ? 'hsl(0, 0%, 70%)' : '#fff',
                    marginRight: 10,
                }}
            >
                {checked && (
                    <Ionicons name="checkmark" size={18} color="#fff" />
                )}
            </View>

            <Text style={styles.txt}>Remember me</Text>
        </TouchableOpacity>
    );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
    txt: {
        color: '#333',
        fontWeight: '500',
        fontSize: hp('1.5%'),

    }
})