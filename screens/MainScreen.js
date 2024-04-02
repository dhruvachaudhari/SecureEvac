{/* <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
</style>
import React from 'react';
import fire from '../assets/fire.jpg'
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        font: {
            // marginVertical: 10,
            position: 'absolute',
            width: 124,
            height: 45,
            left: '2%',
            // left: '50%',
            // marginLeft: -90.5,
            // top: 143,
            fontfamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 30,
            lineHeight: 45,
            textAlign: 'center',
            color: '#000000',
        },

        topbar: {
            width: 375,
            height: 163,
            left: 0,
            top: -37,
            backgroundColor: '#EA3546',
            borderRadius: 39,
            position: 'relative',
        },
        navbar: {
            width: 375,
            height: 127,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 59,
            flexDirection: "row",
            alignSelf: 'flex-start',

        },
        secure: {

            position: 'absolute',
            width: 178,
            height: 45,
            left: '50%',
            marginLeft: -89,
            top: 0,
            fontfamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 30,
            lineHeight: 45,
            textAlign: 'center',
            color: '#000000',
        },
        map: {

            position: 'absolute',
            width: 36,
            height: 24,
            right: 25,
            top: 8,
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 16,
            lineHeight: 24,
            textAlign: 'right',
            color: '#FFFFFF',
        },
        tileContainer: {
            // marginVertical: 10,
            position: "absolute",
            width: 350,
            height: 353,
            // margin: 5,
            marginTop: 70,
            borderWidth: 2,
            overflow: 'hidden',
            backgroundColor: '#EA3546',
            // borderRadius: 30, // Adjust the value based on your design
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30
        },
        frame4: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 24,
            gap: 6,
            width: 304,
            height: 149,
        },
        leftText: {
            width: 128,
            height: 23,
            fontFamily: 'Source Code Pro',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 18,
            lineHeight: 23,
            color: '#FFFFFF',
        },
        nearText: {
            width: 256,
            height: 72,
            fontFamily: 'Source Code Pro',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 18,
            color: '#FCE6E8',
        },
        tileContainer1: {
            // marginVertical: 10,
            position: "absolute",
            width: 350,
            height: 353,
            // margin: 5,
            top: 500,
            // marginTop: 400,
            borderWidth: 2,
            overflow: 'hidden',
            backgroundColor: '#EA3546',
            // borderRadius: 30, // Adjust the value based on your design
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30
        },

    })
    return (

        <View>
            <View style={styles.topbar}>
                <View style={styles.navbar}>
                    <Text style={styles.secure}>SecureEvac</Text>
                    <TouchableOpacity style={styles.map} onPress={() => navigation.navigate('Map')} >
                        <Text style={{
                            fontSize: 16,
                            color: '#FFFFFF',
                        }}>Map</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Text style={styles.font}>Hazard</Text>

                    <View style={styles.tileContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('DisasterDetail')}>
                            <View style={{
                                width: 350,
                                height: 226,
                                // backgroundColor: '#000000',
                                borderRadius: 12,
                            }}>
                                <Image source={fire} style={{
                                    width: 350,
                                    height: 226,
                                    // borderRadius: 12 ,
                                    // margin: 2 ,
                                }}></Image>
                                <View style={styles.frame4}>
                                    <Text style={styles.leftText}>Left</Text>
                                    <Text style={styles.nearText}>
                                        Near main entrance of college Lies to Left side when exiting canteen
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tileContainer1}>
                        <View style={{
                            width: 350,
                            height: 226,
                            // backgroundColor: '#000000',
                            borderRadius: 12,
                        }}>
                            <Image source={fire} style={{
                                width: 350,
                                height: 226,
                                // borderRadius: 12 ,
                                // margin: 2 ,
                            }}></Image>
                            <View style={styles.frame4}>
                                <Text style={styles.leftText}>Left</Text>
                                <Text style={styles.nearText}>
                                    Near main entrance of college Lies to Left side when exiting canteen
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

           
        </View >
    );
};

export default MainScreen; */}


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import fire from '../assets/fire.jpg';


const MainScreen = ({ navigation }) => {
    const data = [
        { key: '1', leftText: 'Left', nearText: 'Near main entrance of college. Lies to the left side when exiting canteen.' },
        { key: '2', leftText: 'Left', nearText: 'Near main entrance of college. Lies to the left side when exiting canteen.' },
        { key: '3', leftText: 'Left', nearText: 'Near main entrance of college. Lies to the left side when exiting canteen.' }
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('DisasterDetail')}>
            <View style={styles.tileContainer}>
                <Image source={fire} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.leftText}>{item.leftText}</Text>
                    <Text style={styles.nearText}>{item.nearText}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <View style={styles.navbar}>
                        <Text style={styles.secure}>SecureEvac</Text>
                        <TouchableOpacity style={styles.map} onPress={() => navigation.navigate('Map')}>
                            <Text style={styles.mapText}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View><Text style={styles.font}>Hazard</Text></View>

                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    topbar: {
        width: "100%",
        height: 103,
        left: 0,

        backgroundColor: '#EA3546',
        borderBottomLeftRadius: 30, // Adjust as needed for the desired curvature
        borderBottomRightRadius: 30,
        position: 'relative',
    },
    navbar: {
        width: "100%",
        height: 127,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 59,
        padding: 10,
        flexDirection: "row",
        alignSelf: 'flex-start',
    },
    secure: {
        position: 'absolute',
        width: 178,
        height: 45,
        left: '50%',
        marginLeft: -89,
        top: 0,
        fontfamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 45,
        textAlign: 'center',
        color: '#000000',
    },
    map: {
        position: 'absolute',
        width: 36,
        height: 24,
        right: 25,
        top: 8,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'right',
        color: '#FFFFFF',
    },
    mapText: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    font: {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: 30,
        color: '#000000',

    },
    tileContainer: {
        width: '100%',
        backgroundColor: '#EA3546',
        borderRadius: 12,
        marginBottom: 20,
        marginTop: 30
    },
    image: {
        width: '100%',
        height: 226,
        borderRadius: 12,
        marginTop: "auto"
    },
    textContainer: {
        padding: 10,
    },
    leftText: {
        fontFamily: 'Source Code Pro',
        fontWeight: '500',
        fontSize: 18,
        color: '#FFFFFF',
    },
    nearText: {
        fontFamily: 'Source Code Pro',
        fontWeight: '400',
        fontSize: 14,
        color: '#FCE6E8',
    },
});

export default MainScreen;
