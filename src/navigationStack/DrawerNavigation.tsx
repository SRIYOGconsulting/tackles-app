import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Tabs from './TabNavigation';

const MENU = {
    PARTNER: 'PARTNER',
    CAREER: 'CAREER',
    FAQ: 'FAQ',
    GLOSSARY: 'GLOSSARY',
    NULL: 'NULL',
};

export default function DrawerNavigation({
    navigation,
}: {
    navigation: any;
}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(MENU.NULL);

    return (
        <View style={styles.container}>
            {/* Bottom Tabs */}
            <View style={styles.content}>
                <Tabs />
            </View>

            {/* Overlay */}
            {drawerOpen && (
                <TouchableOpacity
                    style={styles.overlay}
                    activeOpacity={1}
                />
            )}

            {/* Drawer */}
            {drawerOpen && (
                <View style={styles.drawer}>

                    {/* CLOSE BUTTON */}
                    <TouchableOpacity
                        style={styles.closeBtn}
                        onPress={() => setDrawerOpen(false)}
                    >
                        <Text style={styles.closeText}>✕</Text>
                    </TouchableOpacity>
                    {/* Logo */}
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.drawerTitle}
                            source={require('../assets/logowithwordmark.png')}
                        />
                    </View>

                    {/* Home */}
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('Main', {
                                screen: 'Home',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/home.png')}
                                resizeMode="contain"
                                style={styles.iconSize}
                            />

                            <Text style={styles.buttonText}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Services */}
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('Main', {
                                screen: 'Services',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/services.png')}
                                resizeMode="contain"
                                style={styles.iconSize}
                            />

                            <Text style={styles.buttonText}>Services</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Booking */}
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('Main', {
                                screen: 'BookingTab',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/book.png')}
                                resizeMode="contain"
                                style={styles.iconSize}
                            />

                            <Text style={styles.buttonText}>
                                Book a Service
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* About */}
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('Main', {
                                screen: 'Request',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/about.png')}
                                resizeMode="contain"
                                style={styles.iconSize}
                            />

                            <Text style={styles.buttonText}>About Us</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Contact */}
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            navigation.navigate('Main', {
                                screen: 'Contact',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/contact.png')}
                                resizeMode="contain"
                                style={styles.iconSize}
                            />

                            <Text style={styles.buttonText}>Contact</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.divider} />

                    {/* Become Partner */}
                    <TouchableOpacity
                        style={[
                            styles.item,
                            activeItem === MENU.PARTNER &&
                            styles.activeItem,
                        ]}
                        onPress={() => {
                            setActiveItem(MENU.PARTNER);

                            navigation.navigate('Main', {
                                screen: 'Partner',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/becomeApartner.png')}
                                resizeMode="contain"
                                style={[
                                    styles.iconSize,
                                    activeItem === MENU.PARTNER &&
                                    styles.activeIcon,
                                ]}
                            />

                            <Text
                                style={[
                                    styles.buttonText,
                                    activeItem === MENU.PARTNER &&
                                    styles.activeText,
                                ]}
                            >
                                Become a Partner
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Career */}
                    <TouchableOpacity
                        style={[
                            styles.item,
                            activeItem === MENU.CAREER &&
                            styles.activeItem,
                        ]}
                        onPress={() => {
                            setActiveItem(MENU.CAREER);

                            navigation.navigate('Main', {
                                screen: 'Career',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/career.png')}
                                resizeMode="contain"
                                style={[
                                    styles.iconSize,
                                    activeItem === MENU.CAREER &&
                                    styles.activeIcon,
                                ]}
                            />

                            <Text
                                style={[
                                    styles.buttonText,
                                    activeItem === MENU.CAREER &&
                                    styles.activeText,
                                ]}
                            >
                                Career
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* FAQ */}
                    <TouchableOpacity
                        style={[
                            styles.item,
                            activeItem === MENU.FAQ &&
                            styles.activeItem,
                        ]}
                        onPress={() => {
                            setActiveItem(MENU.FAQ);

                            navigation.navigate('Main', {
                                screen: 'Faqs',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/faq.png')}
                                resizeMode="contain"
                                style={[
                                    styles.iconSize,
                                    activeItem === MENU.FAQ &&
                                    styles.activeIcon,
                                ]}
                            />

                            <Text
                                style={[
                                    styles.buttonText,
                                    activeItem === MENU.FAQ &&
                                    styles.activeText,
                                ]}
                            >
                                FAQ
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Glossary */}
                    <TouchableOpacity
                        style={[
                            styles.item,
                            activeItem === MENU.GLOSSARY &&
                            styles.activeItem,
                        ]}
                        onPress={() => {
                            setActiveItem(MENU.GLOSSARY);

                            navigation.navigate('Main', {
                                screen: 'Glossary',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image
                                source={require('../assets/drawer/glossary.png')}
                                resizeMode="contain"
                                style={[
                                    styles.iconSize,
                                    activeItem === MENU.GLOSSARY &&
                                    styles.activeIcon,
                                ]}
                            />

                            <Text
                                style={[
                                    styles.buttonText,
                                    activeItem === MENU.GLOSSARY &&
                                    styles.activeText,
                                ]}
                            >
                                Glossary
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Admin Login */}
                    <TouchableOpacity
                        onPress={() => {
                             navigation.navigate('Main', {
                                screen: 'AdminLogin',
                            });

                            setDrawerOpen(false);
                        }}
                    >
                        <Text style={styles.ADMINbuttoncontainer}>
                            Admin Login
                        </Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Floating Menu Button */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setDrawerOpen(!drawerOpen)}
            >
                <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        flex: 1,
    },

    drawer: {
        position: 'absolute',
        left: wp('3%'),
        width: wp('75%'),

        top: hp('8%'),
        bottom: hp('8%'),

        backgroundColor: '#d3d3d3',
        padding: wp('5%'),

        borderRadius: wp('6%'),

        zIndex: 10,
    },

    imageContainer: {
        width: '100%',
        height: hp('7%'),
        marginBottom: hp('2.5%'),

        alignItems: 'flex-start',
        justifyContent: 'center',

        borderBottomWidth: 1,
        borderColor: 'hsl(0, 0%, 80%)',
        paddingBottom: hp('1.5%'),
    },

    drawerTitle: {
        width: wp('38%'),
        height: hp('6.5%'),
        resizeMode: 'contain',
    },

    buttoncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    ADMINbuttoncontainer: {
        fontSize: hp('1.7%'),

        color: 'hsl(0, 0%, 30%)',
        fontWeight: '500',

        textAlign: 'center',
        marginTop: hp('5%'),
        marginLeft: hp('1%'),

        borderWidth: 1,
        borderColor: 'hsl(0, 0%, 30%)',

        paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),

        borderRadius: wp('1.5%'),

        alignSelf: 'flex-start',
    },
    item: {
        paddingVertical: hp('1.6%'),
        paddingHorizontal: wp('2%'),
        borderRadius: wp('2.5%'),
    },

    fab: {
        position: 'absolute',

        top: hp('3.8%'),
        right: wp('14%'),

        width: wp('8.5%'),
        height: wp('8.5%'),
        borderRadius: wp('5%'),
        borderWidth: 1.5,
        backgroundColor: 'transparent',
        borderColor: '#73977c',
        alignItems: 'center',
        justifyContent: 'center',

    },

    menuIcon: {
        fontSize: hp('2.3%'),
        color: '#73977c',
        fontWeight: '700',
    },

    buttonText: {
        fontSize: hp('1.75%'),
        color: 'hsl(0, 0%, 30%)',
        fontWeight: '500',
        letterSpacing: 0.2,
    },

    iconSize: {
        width: wp('4.8%'),
        height: wp('4.8%'),
        marginRight: wp('3%'),

        tintColor: '#404040',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,

        backgroundColor: 'rgba(0, 0, 0,0.75)',
        zIndex: 5,
    },

    divider: {
        borderBottomWidth: 1,
        borderColor: '#797979',

        marginVertical: hp('2%'),
    },

    activeItem: {
        backgroundColor: 'rgba(47, 111, 94, 0.08)',
    },


    activeText: {
        color: 'green',
        fontWeight: '700',
    },

    activeIcon: {
        tintColor: 'green',
    },

    closeBtn: {
        position: 'absolute',
        top: hp('1.2%'),
        right: wp('3%'),

        width: wp('8%'),
        height: wp('8%'),
        borderRadius: wp('4%'),

        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 11,
    },

    closeText: {
        fontSize: hp('1.8%'),
        color: 'hsl(0, 0%, 25%)',
        fontWeight: '800',
    },
});