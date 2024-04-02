// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import * as ImagePicker from 'expo-image-picker';

// const FormScreen = () => {
//     const [name, setName] = useState('');
//     const [department, setDepartment] = useState('');
//     const [designation, setDesignation] = useState('');
//     const [complaint, setComplaint] = useState('');

//     const [image, setImage] = useState(null);

//     const handleSubmit = () => {
//         // Handle form submission here, you can send the form data to server or perform any other action
//         console.log('Form Submitted:', { name, department, designation, complaint, bloodType, image });
//         // Reset form fields after submission
//         setName('');
//         setDepartment('');
//         setDesignation('');
//         setComplaint('');

//         setImage(null);
//     };

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         if (!result.cancelled) {
//             setImage(result.uri);
//         }
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.label}>Name:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={name}
//                 onChangeText={text => setName(text)}
//             />
//             <Text style={styles.label}>Department:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={department}
//                 onChangeText={text => setDepartment(text)}
//             />
//             <Text style={styles.label}>Designation:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={designation}
//                 onChangeText={text => setDesignation(text)}
//             />
//             <Text style={styles.label}>Complaint:</Text>
//             <TextInput
//                 style={[styles.input, styles.complaintInput]}
//                 value={complaint}
//                 onChangeText={text => setComplaint(text)}
//                 multiline
//                 numberOfLines={4}
//             />

//             <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
//                 <Text style={styles.imagePickerButtonText}>Select Image</Text>
//             </TouchableOpacity>
//             {image && <Image source={{ uri: image }} style={styles.image} />}
//             <Button title="Submit" onPress={handleSubmit} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         justifyContent: 'center',
//         paddingHorizontal: 20,
//     },
//     label: {
//         fontSize: 16,
//         marginBottom: 5,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//     },
//     picker: {
//         height: 40,
//         marginBottom: 10,
//     },
//     complaintInput: {
//         height: 80, // Adjust height for larger text area
//     },
//     imagePickerButton: {
//         backgroundColor: '#007bff',
//         padding: 10,
//         borderRadius: 5,
//         alignSelf: 'flex-start',
//         marginBottom: 10,
//     },
//     imagePickerButtonText: {
//         color: '#fff',
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         resizeMode: 'cover',
//         marginBottom: 10,
//     },
// });

// export default FormScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
const FormScreen = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [designation, setDesignation] = useState('');
    const [complaint, setComplaint] = useState('');
    const [image, setImage] = useState(null);

    const submitSurvey = async () => {
        try {
            // Validate input fields
            // if (!name || !age || !feedback || !selectedGender) {
            //     Alert.alert('Error', 'Please fill out all fields.');
            //     return;
            // }

            // Store survey responses in Firebase Firestore
            await addDoc(collection(db, 'surveys'), {
                name,
                department,
                designation,
                complaint,
                image

            });

            // Show success message
            // Alert.alert('Success', 'Survey submitted successfully!');

            // Clear input fields
            setName('');
            setDepartment('');
            setDesignation('');
            setComplaint('');
            setImage(null);

        } catch (error) {
            console.error('Error submitting survey:', error);
            // Display error message to the user
            Alert.alert('Error', 'Error submitting survey. Please try again later.');
        }
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    // const handleSubmit = async () => {
    //     const db = getFirestore();
    //     const formData = {
    //         name,
    //         department,
    //         designation,
    //         complaint,
    //         image
    //     };
    //     try {
    //         const docRef = await addDoc(collection(db, 'forms'), formData);
    //         console.log('Document written with ID: ', docRef.id);
    //         // Reset form fields after submission
    //         setName('');
    //         setDepartment('');
    //         setDesignation('');
    //         setComplaint('');
    //         setImage(null);
    //     } catch (e) {
    //         console.error('Error adding document: ', e);
    //     }
    // };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text style={styles.label}>Department:</Text>
            <TextInput
                style={styles.input}
                value={department}
                onChangeText={text => setDepartment(text)}
            />
            <Text style={styles.label}>Designation:</Text>
            <TextInput
                style={styles.input}
                value={designation}
                onChangeText={text => setDesignation(text)}
            />
            <Text style={styles.label}>Complaint:</Text>
            <TextInput
                style={[styles.input, styles.complaintInput]}
                value={complaint}
                onChangeText={text => setComplaint(text)}
                multiline
                numberOfLines={4}
            />

            <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
                <Text style={styles.imagePickerButtonText}>Select Image</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Submit" onPress={submitSurvey} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    complaintInput: {
        height: 80, // Adjust height for larger text area
    },
    imagePickerButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    imagePickerButtonText: {
        color: '#fff',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});

export default FormScreen;
