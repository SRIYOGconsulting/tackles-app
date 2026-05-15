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
                    onPress={() => setDrawerOpen(false)}
                />
            )}

            {/* Drawer */}
            {drawerOpen && (
                <View style={styles.drawer}>
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
                    <TouchableOpacity>
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
        width: wp('65%'),

        top: hp('15%'),
        bottom: hp('15%'),

        backgroundColor: 'hsl(0, 0%, 85%)',

        padding: wp('4%'),
        borderRadius: wp('4%'),

        zIndex: 10,
    },

    imageContainer: {
        width: '100%',
        height: hp('7%'),

        marginBottom: hp('2%'),

        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        borderBottomWidth: 1,
        borderColor: 'hsl(0, 0%, 82%)',
    },

    drawerTitle: {
        width: wp('35%'),
        height: hp('7%'),

        resizeMode: 'contain',
    },

    buttoncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    ADMINbuttoncontainer: {
        fontSize: hp('1.7%'),

        color: 'hsl(0, 0%, 30%)',
        fontWeight: '500',

        textAlign: 'center',

        marginTop: hp('1.5%'),

        borderWidth: 1,
        borderColor: 'hsl(0, 0%, 30%)',

        paddingVertical: hp('1%'),
        paddingHorizontal: wp('3%'),

        borderRadius: wp('1.5%'),

        alignSelf: 'flex-start',
    },
    item: {
        paddingVertical: hp('1.4%'),
    },

    fab: {
        position: 'absolute',

        top: hp('3.7%'),
        right: wp('13%'),

        width: wp('9%'),
        height: wp('9%'),

        borderRadius: wp('10%'),

        backgroundColor: 'rgb(62, 62, 62)',

        alignItems: 'center',
        justifyContent: 'center',

        elevation: 10,
    },

    menuIcon: {
        fontSize: hp('2.3%'),
        color: '#fff',
    },

    buttonText: {
        fontSize: hp('1.7%'),

        color: 'hsl(0, 0%, 30%)',

        fontWeight: '500',
    },

    iconSize: {
        width: wp('4.5%'),
        height: wp('4.5%'),

        marginRight: wp('2.5%'),

        tintColor: '#404040',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,

        backgroundColor: '#fff',

        zIndex: 5,
    },

    divider: {
        borderBottomWidth: 1,
        borderColor: '#797979',

        marginVertical: hp('2%'),
    },

    activeItem: {
        backgroundColor: 'rgba(0, 180, 0, 0.15)',

        borderRadius: wp('2.5%'),

        paddingHorizontal: wp('2%'),
    },

    activeText: {
        color: 'green',
        fontWeight: '700',
    },

    activeIcon: {
        tintColor: 'green',
    },
});