import React, {ReactNode} from 'react';
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { tema } from '../../global/styles/tema';

import { propsStack } from '../../routes/app.routes';

type Props = TouchableOpacityProps & {
    title: string;
    action?: ReactNode; 
}

export function Header ({ title, action } : Props){
    const { sencodary100, sencodary40, heading } = tema.colors;
    const navigation = useNavigation<propsStack>();

    return(
        <LinearGradient 
            style={styles.container}
            colors={[ sencodary100, sencodary40 ]}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={ heading }
                />
            </TouchableOpacity>
            
            <Text style={styles.title}>
                {title}
            </Text>

            {
                action 
                ?
                <View>
                    {action}
                </View>
                :
                <View style={{ width: 24}}/>
            }
        </LinearGradient>
    );
}