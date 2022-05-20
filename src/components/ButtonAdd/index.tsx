import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles';
import { tema } from '../../global/styles/tema';

//aula 2 (01:16) essa linha de baixo ta diferente da do component "ButoonIcon" pq é um botão que não precisa de uma propiedade
export function ButtonAdd({...rest} : TouchableOpacityProps) {
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest }
        >
            <MaterialCommunityIcons
                name="plus"
                color={tema.colors.heading}
                size={24}
            />
        </TouchableOpacity>
    )
}