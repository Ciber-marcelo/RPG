import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8
    }, 
    content: {
        width: 100,
        height: 116,
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 8,
        paddingVertical: 20
    },
    title: {
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: tema.colors.sencodary100,
        borderColor: tema.colors.sencodary50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: tema.colors.primary,
        alignSelf: 'flex-end',
        borderRadius: 3 
    },
})