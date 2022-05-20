import { StyleSheet } from 'react-native';
//aula 2 (00:43), "getStatusBarHeight" é a parte de cima da tela do iphone, na aula você entende
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42
    },
    matches: {
        marginTop: 24,
        marginLeft: 24
    }
});