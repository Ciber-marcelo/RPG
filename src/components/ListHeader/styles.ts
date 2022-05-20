import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 27
    },
    title: {
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
        fontSize: 18,
    },
    subtitle: {
        fontFamily: tema.fonts.text400,
        color: tema.colors.highlight,
        fontSize: 13,
    }
})