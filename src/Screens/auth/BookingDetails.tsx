import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import leftArrowIcon from '../../assets/icons/admin/leftarrow.png'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const BookingDetails= ({ navigation }: { navigation: any }) => {


    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent style={styles.header} />

            <View style={styles.divider} />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled">
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={leftArrowIcon} style={styles.backBtn} />
                        <Text style={styles.title}>Booking History</Text>
                    </TouchableOpacity>

                   


                    
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    scrollContent: {
        flexGrow: 1,
    },
    header: {
        marginTop: hp('2%'),
        paddingHorizontal: wp('4%'),
    },

    divider: {
        borderBottomWidth: 1,
        borderColor: '#CAD2DF',
        marginTop: 16,
    },

    title: {
        position: 'absolute',
        top: hp('0%'),
        left: hp('6%'),
        width: hp('30%'),
        fontSize: hp('2.8%'),
        fontWeight: '600',
        color: 'green'

    },

    backButton: {
        position: 'absolute',
        top: 8,
        left: 10,
        zIndex: 10,
    },
    backBtn: {
        width: hp('4%'),
        height: hp('4%'),
        tintColor: 'green'
    }
});

export default BookingDetails;
