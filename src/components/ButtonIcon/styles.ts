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
    },
    iconWrapper:{
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: tema.colors.line
    },
    icon: {
        width: 24,
        height: 18
    }
})