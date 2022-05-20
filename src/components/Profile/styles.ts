import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
  },
  greeting:{
      fontFamily: tema.fonts.title500,
      fontSize: 24,
      color: tema.colors.heading,
      marginRight: 6
  },
  username:{
      fontFamily: tema.fonts.title700,
      fontSize: 24,
      color: tema.colors.heading
  },
  message:{
      fontFamily: tema.fonts.text400,
      color: tema.colors.highlight
  }
});