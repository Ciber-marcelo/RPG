import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 24
    }, 
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
        fontSize: 18,
        marginBottom: 4
    },
    type: {
        fontFamily: tema.fonts.text400,
        color: tema.colors.highlight,
        fontSize: 13,
    }
})