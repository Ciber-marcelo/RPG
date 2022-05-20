import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
  container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
  },
  title: {
    fontFamily: tema.fonts.title700,
    color: tema.colors.heading,
    fontSize: 18
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameStatus: {
    fontFamily: tema.fonts.text400,
    color: tema.colors.highlight,
    fontSize: 13
  },
  bulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9
  }
});