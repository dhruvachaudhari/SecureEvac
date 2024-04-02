import React from 'react';
// import { View, Text, Button } from 'react-native';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fire from '../assets/fire.jpg'

const MapScreen = ({ navigation }) => {
    const styles = StyleSheet.create({
        img: {
            width: "100%",
            height: 180,
            marginTop: 10,
            marginLeft: 3,
            marginRight: 3
        },
        font: {
            // marginVertical: 10,
            position: 'absolute',
            // width: 124,
            // height: 45,
            // left: '2%',
            // // left: '50%',
            // // marginLeft: -90.5,
            // // top: 143,
            // fontfamily: 'Poppins',
            // fontStyle: 'normal',
            // fontWeight: '500',
            // fontSize: 30,
            // lineHeight: 45,
            // textAlign: 'center',
            // color: '#000000',
        },

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
        campus: {

            height: 29,
            left: 137,
            right: 137,
            top: 'calc(50% - 29px/2 - 89.5px)',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 24,
            lineHeight: 29,
            color: '#000000',
        },
        buttonPrimary: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 16,
            paddingHorizontal: 32,
            width: 160,
            backgroundColor: '#EA3546',
            borderRadius: 100,
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
            </View>
            <View><Image
                style={styles.img}
                source={{ uri: "https://www.vidyavision.com/CollegeUploads/Photos/2018-06-1-15-28-35_w.jpg" }}
            /></View>

            <Text style={styles.campus}>Campus</Text>
            {/* Display general map */}
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Feedback')}
                >
                    <Text style={{
                        width: 115,
                        height: 19,
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: 16,
                        lineHeight: 19,
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>Complaint</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Nearby')}
                >
                    <Text style={{
                        width: 115,
                        height: 19,
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: 16,
                        lineHeight: 19,
                        textAlign: 'center',
                        color: '#FFFFFF',
                    }}>SOS</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default MapScreen;
