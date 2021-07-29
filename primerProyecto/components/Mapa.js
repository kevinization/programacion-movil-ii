import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Mapa() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <MapView.Marker
                    coordinate={{
                        latitude: 24.0230093,
                        longitude: -104.6684759,
                    }}
                    title={"marker.title"}
                    description={"desss"}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});