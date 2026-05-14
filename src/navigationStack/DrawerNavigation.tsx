import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import Tabs from './TabNavigation';

export default function DrawerNavigation() {
    const [activeScreen, setActiveScreen] = useState<'Tabs' | 'Settings' | 'Help'>('Tabs');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const renderScreen = () => {
        return <Tabs />;
    };

    return (
        <View style={styles.container}>



            {/* Drawer Menu */}
            {drawerOpen && (

                <View style={styles.drawer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.drawerTitle} source={require('../assets/logowithwordmark.png')}/>
                    </View>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Tabs');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/home.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Home</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Settings');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/services.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Service</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/book.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Book a Service</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/about.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>About Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/contact.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Contact</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ borderBottomWidth: 1, borderColor: '#797979', marginVertical: 10 }} />

                    {/* Below Tab Naviagtion Buttons */}

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Settings');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/becomeApartner.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Become a Partner</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/career.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Career</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/faq.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>FAQ</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                            setActiveScreen('Help');
                            setDrawerOpen(false);
                        }}
                    >
                        <View style={styles.buttoncontainer}>
                            <Image source={require('../assets/drawer/glossary.png')} resizeMode="contain" style={styles.iconSize} />
                            <Text style={styles.buttonText}>Glossary</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {/* Screen Content */}
            <View style={styles.content}>{renderScreen()}</View>

            {/* Floating menu button (optional) */}
            <TouchableOpacity
                style={styles.fab}
                onPress={() => setDrawerOpen(!drawerOpen)}
            >
                <Text style={{ fontSize: 20, color: '#fff' }}>☰</Text>
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
        top: 120,
        bottom: 120,
        left: 10,
        width: 250,
        backgroundColor: '#D9D9D9',
        padding: 15,
        borderRadius: 17,
        elevation: 10,
        zIndex: 10,
    },
    imageContainer: {
        width: '100%',
        height: 60,
        marginBottom: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    drawerTitle: {
 
        width:140,
        height: 60,
        resizeMode: 'contain',
    },
    buttoncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    item: {
        paddingVertical: 12,
    },
    fab: {
        position: 'absolute',
        top: 70,
        left: 20,
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: 'rgb(62, 62, 62)',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        
    },
    buttonText: {
        fontSize: 13,
        color: '#000',
        fontWeight: '500',
    },
    iconSize: {
        width: 17,
        height: 17,
        marginRight: 10
    }
});