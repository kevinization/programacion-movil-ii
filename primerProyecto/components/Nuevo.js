import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header, Icon, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function Nuevo() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', type: "font-awesome" }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff', type: "font-awesome" }}
            />
            <Icon
                raised
                reverse
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => navigation.navigate("info")}
                containerStyle={styles.icon}
            />
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        bottom: "5%",
        position: "absolute",
        right: "5%",
    },
    container: {
        flex: 1,
    },

})
