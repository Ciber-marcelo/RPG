import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

//to usando a propiedade "inCentered" pq as vezes eu precisso que o "listDvider" esteja centralizado e outras vezes não
type Props = {
    isCentered?: boolean;
}

export function ListDivider2 ({isCentered} : Props) {
    return(
            <View 
                style={[
                    styles.container,
                    isCentered ? {
                        marginVertical: 12,
                    } : {
                        marginTop: 2,
                        marginBottom: 31
                    }
                ]}
            />
    );
} 