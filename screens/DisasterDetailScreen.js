import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fire from '../assets/fire.jpg'

const DisasterDetailScreen = () => {
    naviagtion = useNavigation()
    const styles = StyleSheet.create({
        topbar: {
            width: 375,
            height: 163,
            left: 5,
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
        container: {
            marginTop: 150,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

        },
        backgroundImage: {
            width: 350,
            height: 226,
            borderRadius: 16,
        },
        titleDetail:
        {
            flexDirection: 'column',
            width: 343,
            height: 400,
            marginLeft: 16,
            marginTop: 16,
            fontFamily: 'Inter',
            // fontStyle: 'normal',
        }
    });
    return (
        <View>
            <View style={styles.topbar}>
                <View style={styles.navbar}>
                    <Text style={styles.secure}>SecureEvac</Text>
                    <TouchableOpacity style={styles.map} onPress={() => naviagtion.navigate('Map')} >
                        <Text style={{
                            fontSize: 16,
                            color: '#FFFFFF',
                        }}>Map</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Image
                        source={fire}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                    ></Image>
                    <View style={styles.titleDetail}>
                        <Text style={{
                            fontWeight: '500', // Adjust the fontWeight as needed
                            fontSize: 24, // Adjust the fontSize as needed
                            lineHeight: 29,

                        }}> Fire </Text>
                        <Text style={{
                            // fontStyle: 'bold',
                            fontStyle: 'italic',
                            fontWeight: 600,
                            fontsize: 24,
                            lineheight: 29
                        }}> Severe</Text>
                        <Text style={{
                            fontWeight: 400,
                            fontsize: 16,
                            lineheight: 19,
                            padding: 3,
                        }}>
                            Labore sunt veniam amet est. Minim nisi dolor eu ad incididunt cillum elit ex ut. Dolore exercitation nulla tempor consequat aliquip occaecat. Nisi id ipsum irure aute. Deserunt sit aute irure quis nulla eu consequat fugiat Lorem sunt magna et consequat labore.
                        </Text>
                        <Text style={{
                            fontWeight: 500,
                            fontsize: 28,
                            // lineheight: 30,
                            // padding: 2,
                        }}>
                            Preventive measure</Text>

                    </View>
                </View>


            </View>
        </View >
    );
};

export default DisasterDetailScreen;
