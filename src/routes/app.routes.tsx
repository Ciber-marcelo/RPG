import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { tema } from '../global/styles/tema';

import { Home } from '../Telas/Home';
import { AppointmentDetails } from '../Telas/AppointmentDetails';
import { AppointmentCreate } from '../Telas/AppointmentCreate';

//as videos aulas estao desatualizadas na parte da navegação, no youtube eu adicionei um video para ajudar na parte de navegaçãp com react native
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
export type propsNavigationStack = {
    Home: undefined
    AppointmentDetails: undefined
    AppointmentCreate: undefined
}
export type propsStack = NativeStackNavigationProp<propsNavigationStack>

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export function AppRoutes() {
    return (
        <Navigator
            //screenOptions serve para tirar algumas coisas patroes do navigator, exemplo: o titulo da tela
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: tema.colors.sencodary100
                }
            }}
        >
            {/* a tela de "SignIn" não está aqui pq não precisamos navegar para ela, ela aparece se não tiver um usuario logado, detalhes: src/routes/index.tsx */}
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDetails" component={AppointmentDetails} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    )
}
