import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: tema.fonts.title700,
        color: tema.colors.heading,
        fontSize: 20,
    }
})