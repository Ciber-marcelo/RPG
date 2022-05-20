import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
    Alert,
    Share,
    Platform
} from 'react-native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header'
import { styles } from './styles';
import { Fontisto } from '@expo/vector-icons';
import { tema } from '../../global/styles/tema';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider2 } from '../../components/ListDivider2';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load'
import * as Liking from 'expo-linking';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/app.routes';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';


type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    //aula 5 (01:24)
    const route = useRoute();
    const { guildSelected } = route.params as Params;

    const navigation = useNavigation<propsStack>();

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            //console.log(response.data);
            setWidget(response.data);
        } catch {
            Alert.alert('Verifique a configuração de Widget está habilitada no servidor do discord.');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios'
            ? `Junte-se a ${guildSelected.guild.name}`
            : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    //essa função é para um botão que eu comentei
    async function excluir() {
        const storage = await AsyncStorage.clear();
        
        //const appointments = storage ? JSON.parse(storage) : [];
        //getItem(COLLECTION_APPOINTMENTS);
        // const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        // const appointments = storage ? JSON.parse(storage) : [];

        navigation.navigate("Home");
    }

    function handleOpenGuild() {
        Liking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    }, []);
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    //aula 5 (01:40), na video aula foi usado "guildSelected.guild.owner &&" para o botão sumir se o usuario n for o dono do servidor
                    //eu preferi fazer uma pergunta com o "instant_invite" para resolver o problema
                    widget.instant_invite === null
                        ?
                        ''
                        :
                        <TouchableOpacity onPress={handleShareInvitation}>
                            <Fontisto
                                name="share"
                                size={24}
                                color={tema.colors.primary}
                            />
                        </TouchableOpacity>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>

            {
                loading ? <Load /> :
                    <>
                        <ListHeader
                            title='Usuarios'
                            subtitle={`Total ${widget.members.length}`}
                        />

                        <FlatList
                            data={widget.members}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Member data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider2 isCentered />}
                            style={styles.members}
                        />
                    </>
            }

            {/* criei esse botão apenas para apagar o storage, vou alteralo para apagar apenas o appointment em questão */}
            {/* <TouchableOpacity onPress={excluir}>
                <Fontisto
                    name="share"
                    size={24}
                    color={tema.colors.sencodary50}
                />
            </TouchableOpacity>   */}

            {
                //aula 05 (01:55), a linha de baixo está diferente da aula, fiz isso pq achei mais efetivo para resolver o problema
                widget.instant_invite &&
                <View style={styles.footer}>
                    <ButtonIcon
                        title="Entrar na Seção"
                        onPress={handleOpenGuild}
                    />
                </View>
            }
        </Background>
    )
}