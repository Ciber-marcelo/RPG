import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button ({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            { ...rest } 
        >

            <Text style={styles.titulo}> 
                {title}
            </Text>
        </TouchableOpacity>
    );
}