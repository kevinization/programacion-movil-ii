import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Card, Avatar, ListItem, Icon, Divider } from 'react-native-elements'


export default function InfoPost(props) {
    console.log(props)
    const { info } = props.route.params
    return (
        <View>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{info.name}</ListItem.Title>
                    <ListItem.Subtitle style={styles.styleEmail}>{info.email}</ListItem.Subtitle>
                    <ListItem.Subtitle>{info.body}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center"
    },
    styleAvatar: {
        marginLeft: 75
    },
    styleEmail: {
        fontStyle: 'italic',
        fontSize: 10
    }
});