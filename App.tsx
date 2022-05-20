import React from 'react';
import { StatusBar, LogBox } from 'react-native';

//aula 2 (00:05)
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

//ta aqui pra resolver um problema
LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

//aula 4 (01:40), contexto e autenticação 
import { AuthProvider } from './src/hooks/auth';

//aula 2 (??:??), AppLoading é usado para mandar a tela de splash/carregamento enquando coisas como as fonts n foram carregadas 
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsCarregamento] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsCarregamento) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  );
}
