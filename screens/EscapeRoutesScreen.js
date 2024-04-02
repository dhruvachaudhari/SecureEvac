import React from 'react';
import { View, Text, Button } from 'react-native';

const EscapeRoutesScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Escape Routes Screen</Text>
            {/* Display escape route photo */}
            {/* Add buttons representing different floors */}
            <Button title="Floor 1" onPress={() => navigation.navigate('Floor')} />
            <Button title="Floor 2" onPress={() => navigation.navigate('Floor')} />
            {/* Add more buttons as needed */}
        </View>
    );
};

export default EscapeRoutesScreen;
