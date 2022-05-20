import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: tema.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
    },
    titulo:{
        flex: 1,
        color: tema.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: tema.fonts.text500
    }
})