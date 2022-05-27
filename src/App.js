import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Importando as páginas
import Home from './screen/Home';
import SegundaPagina from './screen/SegundaPagina';

// function HomeScreen({navigation}) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Home Screen</Text>
//             <Button title='Ir para a página 2' onPress={()=>{ navigation.navigate('SegundaPagina') }} />
//         </View>
//     );
// }

// function SegundaPagina({navigation}) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Segunda Página</Text>
//             <Button title='Ir para a página Home' onPress={()=>{ navigation.navigate('Home') }} />
//         </View>
//     );
// }

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SegundaPagina" component={SegundaPagina} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}