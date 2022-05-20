import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    content: {
        flex: 1
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    title: {
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
        fontSize: 18
    },
    category: {
        fontFamily: tema.fonts.text400,
        color: tema.colors.highlight,
        fontSize: 13,
        marginRight: 24
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usersInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: tema.fonts.text500,
        color: tema.colors.heading,
        fontSize: 13,
        marginLeft: 7 
    },
    user: {
        fontFamily: tema.fonts.text500,
        fontSize: 13,
        marginLeft: 7,
        marginRight: 24
    },
    guildIconContainer: {
        height: 68,
        width: 64,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    }
})