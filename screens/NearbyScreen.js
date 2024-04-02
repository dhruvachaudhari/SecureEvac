import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const NearbyScreen = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [fireStations, setFireStations] = useState([]);

    useEffect(() => {
        // Fetch and set the current location
        setCurrentLocation({ latitude: 19.04772, longitude: 72.88947 }); // Hardcoded current location for demonstration

        // Fetch and set nearby fire stations
        setFireStations([
            { name: 'Fire Station 1', location: { latitude: 37.789639, longitude: -122.43206 } },
            { name: 'Fire Station 2', location: { latitude: 37.789, longitude: -122.433 } }, // Example nearby fire stations
            { name: 'Fire Station 3', location: { latitude: 37.787, longitude: -122.431 } }
        ]);
    }, []);

    return (
        <View style={styles.container}>
            {currentLocation && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {/* Marker for current location */}
                    <Marker
                        coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude }}
                        title="Your Location"
                        description="You are here"
                        pinColor="blue"
                    />

                    {/* Markers for nearby fire stations */}
                    {fireStations.map((station, index) => (
                        <Marker
                            key={index}
                            coordinate={station.location}
                            title={station.name}
                            description="Fire Station"
                            pinColor="red"
                        />
                    ))}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default NearbyScreen;
