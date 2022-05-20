import React from 'react';
import { Text, View, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import UserSvg from '../../assets/discord.svg';

import { styles } from './styles';

//aula 1 (01:50) as linhas de baixo, servem para vc criar um propiedade obrigatoria pro coponent, no caso o "title", então sempre que vc for passar esse
//componente para uma tela vc tem que colocar um "title" nele, na tela SingIn eu uso esse component.
type Props = TouchableOpacityProps & {
    title: string;
}

// a parte do "{ title, ...rest } : Props" está ai pq eu coloquei que a propiedade "title" deve ser colocado quando o componente for passado para uma tela
//eu fiz isso para que esse botão possa ter um titulo diferente em cada tela se eu precisar.
export function ButtonIcon({ title, ...rest } : Props){
    return(
        <TouchableOpacity 
            style={styles.container} 
            activeOpacity={0.8}
            { ...rest } 
        >
            <View style={styles.iconWrapper}>
                <UserSvg/> 
            </View>

            <Text style={styles.titulo}> 
                {title}
            </Text>
        </TouchableOpacity>
    );
}