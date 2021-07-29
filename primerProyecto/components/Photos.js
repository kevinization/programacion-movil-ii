import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar, Icon, Card, Divider, Overlay } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Photos(props) {
    var i = props.route.params.info.id;

    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${i}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem2 = ({ item }) => (
        < ListItem bottomDivider >
            <Avatar onPress={() => navigation.navigate("infoPhoto", { info: item })} source={{ uri: item.thumbnailUrl }} />
            <ListItem.Content>
                <ListItem.Title onPress={() => navigation.navigate("infoPhoto", { info: item })}>{item.title}</ListItem.Title>

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