import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        backgroundColor: tema.colors.sencodary40,
        color: tema.colors.heading,
        borderRadius: 8,
        fontFamily: tema.fonts.text400,
        fontSize: 13,
        marginRight: 4,
        borderWidth: 1,
        borderColor: tema.colors.sencodary50,
        paddingHorizontal: 16,
        paddingTop: 16,
        textAlignVertical: 'top'
    }, 
})