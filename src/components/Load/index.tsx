import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { tema } from '../../global/styles/tema';

import { styles } from './styles';

export function Load() {
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size="large"
                color={tema.colors.primary}
            />
        </View>
    );
}