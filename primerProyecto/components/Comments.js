import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Icon, Card, Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Comments(props) {
    var i = props.route.params.info.id;

    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${i}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem2 = ({ item }) => (
        < ListItem bottomDivider >
            <ListItem.Content>
                <ListItem.Title onPress={() => navigation.navigate("infoPost", { info: item })}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{ fontStyle: 'italic', fontSize: 10 }} onPress={() => navigation.navigate("infoPost", { info: item })}>{item.email}</ListItem.Subtitle>
                <ListItem.Subtitle onPress={() => navigation.navigate("infoPost", { info: item })}>{item.body}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem >
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