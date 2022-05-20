import { StyleSheet } from 'react-native';
import { tema } from '../../global/styles/tema';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  imput: {
      height: 50,
      width: 200,
      borderBottomWidth: 2
  },
  image: {
    width: '100%',
    height: '45%'
  },
  content: {
    marginTop: -60,
    paddingHorizontal: 50
  },
  titulo: {
    color: tema.colors.heading,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 16,
    fontFamily: tema.fonts.title700,
    lineHeight: 40
  },
  subtitulo: {
    color: tema.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
    fontFamily: tema.fonts.title500,
    lineHeight: 25
  },
});