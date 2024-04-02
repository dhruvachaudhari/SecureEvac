// import React from 'react';
// import { View, Text, TextInput } from 'react-native';


// const LoginScreen = () => {
//     const [text, onChangeText] = React.useState("");
//     const styles = {

//     };

//     return (
//         <View>

//         </View>
//     );
// };

// export default LoginScreen;

import React from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,
    KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('user credential', userCredential);
                const user = userCredential.user;
                console.log('user details', user);
                navigation.replace('Main');
            })
            .catch((error) => {
                console.error('Login error:', error.message);
                // Display error message to the user
            });
    };


    return (
        <View style={styles.container}>
            <View style={styles.pageHeader}>
                <Text style={styles.logInText}>Log In</Text>
            </View>
            <View style={styles.inputTextContainer1}>

                <TextInput
                    style={styles.emailContainer}
                    placeholder="Email"
                    placeholderTextColor="#BDBDBD"
                    value={email}
                    onChangeText={setEmail}
                />

            </View>
            <View style={styles.inputTextContainer2}>

                <TextInput
                    style={styles.passwordContainer}
                    placeholder="Password"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

            </View>




            <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotYour}>
                <Text>Forgot your password?</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputTextContainer1: {
        position: 'absolute',
        height: 50,
        left: 17,
        right: 15,
        top: 235,
    },

    emailContainer: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#00000',
    },
    inputTextContainer2: {
        position: 'absolute',
        height: 50,
        left: 17,
        right: 15,
        top: 301,
    },

    passwordContainer: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
    },
    container: {
        position: 'relative',
        width: 375,
        height: 812,
        backgroundColor: '#FFFFFF',
    },
    pageHeader: {
        position: 'absolute',
        height: 36,
        left: 16,
        right: 16,
        top: 153,
    },
    logInText: {
        width: 88,
        height: 36,
        left: '50%',
        marginLeft: -43.75,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 36,
        textAlign: 'center',
        color: '#000000',
    },



    buttonPrimary: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        gap: 12,
        position: 'absolute',
        height: 51,
        left: 16,
        right: 16,
        bottom: 347,
        backgroundColor: '#EA3546',
        borderRadius: 100,
    },
    buttonText: {
        width: 47,
        height: 19,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    forgotYour: {
        position: 'absolute',
        width: 178,
        height: 19,
        left: '50%',
        marginLeft: -84.25,
        bottom: 312,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        color: '#EA3546',
    },
});

export default LoginScreen;


