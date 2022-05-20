import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        backgroundColor: tema.colors.sencodary40,
        color: tema.colors.heading,
        borderRadius: 8,
        fontFamily: tema.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: tema.colors.sencodary50
    }, 
})