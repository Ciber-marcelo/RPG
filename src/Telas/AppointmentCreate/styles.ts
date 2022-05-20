import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        flexDirection: 'row',
        width: '100%',
        height: 68,
        borderColor: tema.colors.sencodary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: 64,
        height: 68,
        backgroundColor: tema.colors.sencodary40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: tema.colors.sencodary50,
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: tema.fonts.text500,
        color: tema.colors.highlight
    },
    caracteresLimit: {
        fontFamily: tema.fonts.text400,
        fontSize: 13,
        color: tema.colors.highlight
    },
    footer: {
      marginVertical: 20,
      marginBottom: 56     
    }
});