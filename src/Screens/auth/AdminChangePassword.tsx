import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Alert,
    Dimensions,
    StyleSheet,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import EyeOffIcon from '../../assets/icons/admin/eyeOff.png';
import EyeOnIcon from '../../assets/icons/admin/eyeOn.png';
import leftArrowIcon from '../../assets/icons/admin/leftarrow.png'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Get screen dimensions for responsive layout
const { width, height } = Dimensions.get('window');

// Font scaling utility function
const scaleFont = (size: number) => {
    const guidelineBaseWidth = 375; // Base screen width to scale from
    return (size * width) / guidelineBaseWidth;
};

const AdminChangePassword = ({ navigation }: { navigation: any }) => {
    const [passwordVisibleOLD, setPasswordVisibleOLD] = useState(false);
    const [passwordVisibleNEW, setPasswordVisibleNEW] = useState(false);
    const [passwordVisibleCONFIRM, setPasswordVisibleCONFIRM] = useState(false);


    const [oldPassword, setOldPassword] = useState<any>('');
    const [newPassword, setNewPassword] = useState<any>('');
    const [confirmNewpassword, setConfirmNewPassword] = useState<any>('');

    const togglePasswordVisibilityOLD = () => {
        setPasswordVisibleOLD(!passwordVisibleOLD);
    };

    const togglePasswordVisibilityNEW = () => {
        setPasswordVisibleNEW(!passwordVisibleNEW);
    }

    const togglePasswordVisibilityCONFIRM = () => {
        setPasswordVisibleCONFIRM(!passwordVisibleCONFIRM);
    }

    const handleSubmit = () => {
        if (oldPassword === 'admin') {
            navigation.navigate('Booking');
        } else {
            Alert.alert('Wrong Email or Password');
        }
    };

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
                        <Text style={styles.title}>Change Password</Text>
                    </TouchableOpacity>

                    <View style={styles.formContainer}>

                        <Text style={styles.welcomeText}>Choose a New Password</Text>
                        <Text style={styles.welcomeText2}>Enter and confirm your new password to regain access</Text>


                        {/* OLD pin */}
                        <Text style={styles.labelInput}>Old PIN</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder=""
                                placeholderTextColor={'hsl(0, 0%, 20%)'}
                                secureTextEntry={!passwordVisibleOLD}
                                style={styles.textInput}
                                value={oldPassword}
                                maxLength={4}
                                onChangeText={(text) =>
                                    setOldPassword(text.replace(/[^0-9]/g, '').slice(0, 4))
                                }
                            />
                            <TouchableOpacity onPress={togglePasswordVisibilityOLD}>
                                {passwordVisibleOLD ? (
                                    <Image source={EyeOnIcon} style={{ width: 23, height: 27, tintColor: 'hsl(0, 0%, 30%)' }} />

                                ) : (
                                    <Image source={EyeOffIcon} style={{ width: 22, height: 22, tintColor: 'hsl(0, 0%, 30%)' }} />
                                )}
                            </TouchableOpacity>
                        </View>
                        {/* new password */}
                        <Text style={styles.labelInput}>New PIN</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder=""
                                placeholderTextColor={'hsl(0, 0%, 20%)'}
                                secureTextEntry={!passwordVisibleNEW}
                                style={styles.textInput}
                                value={newPassword}
                                maxLength={4}
                                onChangeText={(text) =>
                                    setNewPassword(text.replace(/[^0-9]/g, '').slice(0, 4))
                                }
                            />
                            <TouchableOpacity onPress={togglePasswordVisibilityNEW}>
                                {passwordVisibleNEW ? (
                                    <Image source={EyeOnIcon} style={{ width: 23, height: 27, tintColor: 'hsl(0, 0%, 30%)' }} />

                                ) : (
                                    <Image source={EyeOffIcon} style={{ width: 22, height: 22, tintColor: 'hsl(0, 0%, 30%)' }} />
                                )}
                            </TouchableOpacity>
                        </View>
                        {/* confirem new password */}
                        <Text style={styles.labelInput}>Confirm New PIN</Text>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder=""
                                placeholderTextColor={'hsl(0, 0%, 20%)'}
                                secureTextEntry={!passwordVisibleCONFIRM}
                                style={styles.textInput}
                                value={confirmNewpassword}
                                 maxLength={4}
                                onChangeText={(text) =>
                                    setConfirmNewPassword(text.replace(/[^0-9]/g, '').slice(0, 4))
                                }
                            />
                            <TouchableOpacity onPress={togglePasswordVisibilityCONFIRM}>
                                {passwordVisibleCONFIRM ? (
                                    <Image source={EyeOnIcon} style={{ width: 23, height: 27, tintColor: 'hsl(0, 0%, 30%)' }} />

                                ) : (
                                    <Image source={EyeOffIcon} style={{ width: 22, height: 22, tintColor: 'hsl(0, 0%, 30%)' }} />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity>
                                <Text style={styles.btnText}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnText}>Create new account</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.mainBtn}>
                            <TouchableOpacity style={styles.CancelButton} onPress={handleSubmit}>
                                <Text style={styles.CancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                                <Text style={styles.loginButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>


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
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: hp('2%'),

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
    btnContainer: {
        // marginLeft: 200
    },
    btnText: {
        color: '#333',
        fontWeight: '500',
        textDecorationLine: 'underline',
        marginBottom: hp('0.3%')
    },

    formContainer: {
        paddingHorizontal: '5%',
        alignItems: 'center',
        paddingVertical: hp('3%'),
        width: '95%'
    },
    image: {
        width: wp('40%'),
        height: hp('15%'),
        resizeMode: 'contain',
        borderRadius: 200
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
    welcomeText: {
        marginTop: height * 0.03,
        fontSize: scaleFont(15),
        fontWeight: '600',
        width: '100%',
        color: 'hsl(0, 0%, 30%)'

    },
    welcomeText2: {
        fontSize: scaleFont(15),
        fontWeight: '500',
        marginTop: height * 0.01, // Margin adjusted based on screen height
        marginBottom: height * 0.05, // Margin adjusted based on screen height
        width: '100%',
        color: 'hsl(0, 0%, 50%)'

    },
    labelInput: {
        fontSize: hp('1.9%'),
        fontWeight: '600',
        width: '98%',
        marginBottom: hp('1.5%'),
        color: 'hsl(0, 0%, 30%)'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: hp('5.5%'),
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#d3d3d3',
        paddingHorizontal: 16,
        marginBottom: '7%',
        backgroundColor: '#f7f7f7'
    },
    textInput: {
        flex: 1,              //  VERY IMPORTANT
        fontSize: scaleFont(22),
        fontWeight: '800',
        paddingVertical: 0,
        textAlignVertical: 'center', //  Android fix
        letterSpacing: 3,
        color:'hsl(0, 0%, 20%)',
        paddingHorizontal: 20

    },
    mainBtn: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: 'row',
        paddingTop: height * 0.1, // Adjusted button margin based on screen height
        marginBottom: hp('3%'),
        paddingHorizontal: wp('2%')
    },
    CancelButton: {
        height: height * 0.055,
        width: width * 0.35, // Adjust width based on screen size
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,0.3)'
    },
    CancelButtonText: {
        fontSize: scaleFont(17),
        fontWeight: '700',
        color: '#000'
    },
    loginButton: {
        height: height * 0.055,
        width: width * 0.35, // Adjust width based on screen size
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    loginButtonText: {
        fontSize: scaleFont(17),
        fontWeight: '600',
        color: '#fff'
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

export default AdminChangePassword;
