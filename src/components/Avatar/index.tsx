import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { tema } from '../../global/styles/tema';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage } : Props) {
    const { sencodary30, sencodary100 } = tema.colors;

    return (
        <LinearGradient 
            style={styles.container}
            colors={[sencodary30, sencodary100]}
        >
            <Image
                source={{ uri: urlImage }}
                style={styles.avatar}
            />
        </LinearGradient>
    )
}