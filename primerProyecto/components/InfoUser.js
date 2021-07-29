import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Card, Avatar, ListItem, Icon } from 'react-native-elements'

export default function InfoUser(props) {
    console.log(props)
    const { info } = props.route.params
    return (
        <View>
            <Card>
                <Avatar
                    rounded
                    size="large"
                    icon={{ name: 'user', color: 'orange', type: 'font-awesome' }}
                    overlayContainerStyle={{ backgroundColor: 'gray' }}
                    activeOpacity={0.7}
                    containerStyle={styles.centerElements}
                />
                <Text h4 style={styles.centerText} >{info.name}</Text>
                <Text h5 style={styles.centerText} >{info.username}</Text>
                <Card.Divider />
                <Text h5 style={styles.centerText} >{info.address.street} {info.address.suite}</Text>
                <Text h5 style={styles.centerText}>{info.address.city} -- {info.address.zipcode}</Text>
                <ListItem bottomDivider>
                    <Icon name="phone" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>{info.phone}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name="at" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>{info.website}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                    <Icon name="envelope" type="font-awesome" />
                    <ListItem.Content>
                        <ListItem.Title>{info.email}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <Text style={styles.centerText}>Company</Text>
                <Text style={styles.centerText}>{info.company.name}</Text>
                <Text style={styles.centerText}>{info.company.catchPhrase}</Text>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        textAlign: "center"
    },
    centerElements: {
        alignSelf: 'center'
    },
    centerText: {
        alignItems: 'center',
        textAlign: 'center'
    }
});