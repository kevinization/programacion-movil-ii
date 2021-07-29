import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Icon, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Posts() {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem2 = ({ item }) => (
        <Card>
            <Card.Title onPress={() => navigation.navigate("infoPost", { info: item })}>{item.title}</Card.Title>
            <Card.Divider />
            <Text onPress={() => navigation.navigate("infoPost", { info: item })}>{item.body}</Text>
        </Card>
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