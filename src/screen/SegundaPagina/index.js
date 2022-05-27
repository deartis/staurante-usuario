import { View, Text, Button } from 'react-native';
import React from 'react';

export default function SegundaPagina({navigation}) {
    return (
        <View>
            <Text>SegundaPagina</Text>
            <Button title='Ir para a página Home' onPress={() => {
                navigation.navigate('Home')
            }} />
        </View>
    )
}