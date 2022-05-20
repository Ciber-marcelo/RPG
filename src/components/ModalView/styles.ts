import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    },
    overlay: {
        flex: 1,
        backgroundColor: tema.colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: tema.colors.sencodary30,
        alignSelf: 'center',
        marginTop: 13
    }
})