import React from 'react';
import { Text, View, Image, Alert, ActivityIndicator } from 'react-native';
import IlustracaoImg from '../../assets/rathalos.png';
import { styles } from './styles';
import { tema } from '../../global/styles/tema';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('error');
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IlustracaoImg}
          style={styles.image}
          //resizeMode é usado para deixa a imagem proporcional na tela
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.titulo}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            seções de RPG
          </Text>

          <Text style={styles.subtitulo}>
            Crie grupos para jogar seu RPG{'\n'}
            favorito com seus amigos
          </Text>

          {
            loading ? <ActivityIndicator color={tema.colors.primary} />
            :
            <ButtonIcon
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  );
}

