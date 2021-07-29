import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Card, Avatar, ListItem, Icon, Divider } from 'react-native-elements'


export default function InfoAlbum(props) {
    console.log(props)
    const { info } = props.route.params
    return (
        <View>
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{info.title}</ListItem.Title>
                    <ListItem.Subtitle style={styles.styleEmail}>{info.url}</ListItem.Subtitle>
                    <ListItem.Subtitle>{info.thumbnailUrl}</ListItem.Subtitle>
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