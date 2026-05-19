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
    TextInput,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import leftArrowIcon from '../../assets/icons/admin/leftarrow.png'
import SearchIcon from '../../assets/image/TabIcon/searchbar.png'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const BookingHistory = ({ navigation }: { navigation: any }) => {


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

                    <View style={styles.inputContainer}>
                        <Image source={SearchIcon} style={{height:20, width:20,}} />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={'rgba(67, 67, 67,0.8)'}
                            style={styles.textInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.mainBtns}>
                        <TouchableOpacity>
                            <Text style={styles.flexBtn}>All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.flexBtn}>Completed</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.flexBtn}>Pending</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.flexBtn}>Cancelled</Text>
                        </TouchableOpacity>
                    </View>



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
    alignItems: 'center',
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
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: hp('3.5%'),
        borderWidth: 1.5,
        width: '80%',
        marginBottom: '5%',
        borderRadius: 200,
        borderColor: 'rgba(0, 0, 0,0.3)',
        height: hp('5%'),
        marginTop:hp('8%'),
        alignItems:'center',
    },
    textInput: {
        fontSize:hp(1.8),
        fontWeight: '500',
        color:'#000',
        paddingLeft:8
    },
    mainBtns:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:wp('5%')
    },
    flexBtn:{
        paddingHorizontal:wp('4%'),
        paddingVertical:hp('0.3%'),
        backgroundColor:'#d7edd7',
        borderRadius:30,
        letterSpacing:0.5,
        fontWeight:'500',
        color:'rgba(0, 0, 0,0.7)'

    }
});

export default BookingHistory;
