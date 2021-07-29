import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Users() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem2 = ({ item }) => (
        <ListItem bottomDivider onPress={() => navigation.navigate("infoUser", { info: item })} >
            {item.url ? <Avatar source={{ url: item.url }} /> : <Icon name={"person-outline"} type='ionicon' />}

            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id + index.toString()}
                    // renderItem={({ item }) => (
                    //     <Text>{item.name} -- {item.username} -- {item.email}</Text>
                    // )}
                    renderItem={renderItem2}
                />
            )}
        </View>
    );
};