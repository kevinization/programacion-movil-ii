import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Card, Avatar, ListItem, Icon, Image } from 'react-native-elements'

export default function InfoPhoto(props) {
    console.log(props)
    const { info } = props.route.params
    return (
        <View style={styles.centerView}>
            <Image
                source={{ uri: info.url }}
                style={{ width: 200, height: 200 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    centerElements: {
        alignSelf: 'center'
    },
    centerView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
});

