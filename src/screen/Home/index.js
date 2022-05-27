import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Home({navigation}) {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Ir para a página 2' onPress={() => {
                navigation.navigate('SegundaPagina')
            }} />
        </View>
    )
}