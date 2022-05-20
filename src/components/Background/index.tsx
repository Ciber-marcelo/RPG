import React, {ReactNode} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { tema } from '../../global/styles/tema';

//aula 2 (00:35)
type Props = {
    children: ReactNode;
}

export function Background({ children } : Props) {
    //essa linha dos const ta aqui só para deixar o codigo mais enxuto, mas nesse caso nem deixou tanto...
    const { sencodary70, sencodary100 } = tema.colors;

    return (
        <LinearGradient 
            style={styles.container}
            colors={[sencodary70, sencodary100]}
        >
            {children}
        </LinearGradient>
    )
}