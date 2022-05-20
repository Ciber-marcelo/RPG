import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { tema } from '../../global/styles/tema';

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    //hasCheckBox foi criada para adicionar ou não o quadradinho de checked nas categorias, para adicionala é só colocar "true" na linha 21 
    hasCheckBox: boolean;
    checked?: boolean;
}

export function Category({ 
    title, 
    icon: Icon, 
    checked = false, 
    hasCheckBox = false,
    ...rest 
}: Props) {
    const { sencodary40, sencodary50, sencodary70, sencodary85 } = tema.colors;

    return (
        <TouchableOpacity {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[sencodary50, sencodary70]}
            >
                <LinearGradient 
                    style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[ checked ? sencodary85 : sencodary50, sencodary40 ]}
                >
                    {
                        hasCheckBox &&
                        <View style={
                            checked ? styles.checked : styles.check
                        } />
                    }
                    
                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    );
}