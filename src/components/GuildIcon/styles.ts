import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: 62,
        height: 66,
        borderRadius: 8,
        backgroundColor: tema.colors.discord,
        alignItems: 'center',
        justifyContent: 'center' ,
        overflow: 'hidden'
    },
    image: {
        width: 62,
        height: 66,
    }
})