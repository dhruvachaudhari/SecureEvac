// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, Dimensions } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';

// const NearbyScreen = () => {
//     const [currentLocation, setCurrentLocation] = useState(null);
//     const [fireStations, setFireStations] = useState([]);

//     useEffect(() => {
//         // Fetch and set the current location
//         setCurrentLocation({ latitude: 19.04772, longitude: 72.88947 }); // Hardcoded current location for demonstration

//         // Fetch and set nearby fire stations
//         setFireStations([
//             { name: 'Fire Station 1', location: { latitude: 37.789639, longitude: -122.43206 } },
//             { name: 'Fire Station 2', location: { latitude: 37.789, longitude: -122.433 } }, // Example nearby fire stations
//             { name: 'Fire Station 3', location: { latitude: 37.787, longitude: -122.431 } }
//         ]);
//     }, []);

//     return (
//         <View style={styles.container}>
//             {currentLocation && (
//                 <MapView
//                     style={styles.map}
//                     initialRegion={{
//                         latitude: currentLocation.latitude,
//                         longitude: currentLocation.longitude,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     {/* Marker for current location */}
//                     <Marker
//                         coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
//                         title="Your Location"
//                         description="You are here"
//                         pinColor="blue"
//                     />

//                     {/* Markers for nearby fire stations */}
//                     {fireStations.map((station, index) => (
//                         <Marker
//                             key={index}
//                             coordinate={station.location}
//                             title={station.name}
//                             description="Fire Station"
//                             pinColor="red"
//                         />
//                     ))}
//                 </MapView>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     map: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
// });

// export default NearbyScreen;

// AIzaSyCX4MlQ_Rwb0Qku5bo0cLZ1PGIpOjaLymo
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const NearbyScreen = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        // Fetch and set the current location
        setCurrentLocation({ latitude: 19.04772, longitude: 72.88947 }); // Hardcoded current location for demonstration
    }, []);

    const handleLocationSelect = (data, details) => {
        const { geometry } = details;
        const { location } = geometry;
        const { lat, lng } = location;

        setSelectedLocation({
            latitude: lat,
            longitude: lng,
            title: details.name,
            description: details.formatted_address,
        });

        // Move map to selected location
        Keyboard.dismiss(); // Dismiss the keyboard
    };

    return (
        <View style={styles.container}>
            {/* Google Places Autocomplete */}
            <View style={styles.searchContainer}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        handleLocationSelect(data, details);
                    }}
                    query={{
                        key: 'AIzaSyCX4MlQ_Rwb0Qku5bo0cLZ1PGIpOjaLymo',
                        language: 'en',
                    }}
                    styles={{
                        textInputContainer: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            width: '100%',
                        },
                        textInput: {
                            marginLeft: 0,
                            marginRight: 0,
                            height: 38,
                            color: '#5d5d5d',
                            fontSize: 16,
                            width: '100%',
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                    }}
                    listViewDisplayed={false}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    keyboardShouldPersistTaps="always"
                    onKeyPress={(event) => {
                        if (event.nativeEvent.key === 'Enter') {
                            Keyboard.dismiss();
                        }
                    }}
                />
            </View>

            {/* Map View */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: currentLocation?.latitude || 0,
                    longitude: currentLocation?.longitude || 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={selectedLocation ? {
                    latitude: selectedLocation.latitude,
                    longitude: selectedLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                } : undefined}
            >
                {/* Marker for current location */}
                {currentLocation && (
                    <Marker
                        coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
                        title="Your Location"
                        description="You are here"
                        pinColor="blue"
                    />
                )}

                {/* Marker for selected location */}
                {selectedLocation && (
                    <Marker
                        coordinate={{
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude,
                        }}
                        title={selectedLocation.title}
                        description={selectedLocation.description}
                        pinColor="green"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: 'absolute',
        zIndex: 1,
    },
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
});

export default NearbyScreen;
