import React, { useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header'
import { styles } from './styles';
import { tema } from '../../global/styles/tema';
import { CategorySelect } from '../../components/CategorySelect';
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { Background } from '../../components/Background';
import uuid from 'react-native-uuid';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/app.routes';


export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    //aula 3 (02:00)
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation<propsStack>();

    function handleOpenGuilds() {
        setOpenGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildSelect: GuildProps) {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    function handleCategorySelect(categoryId: string) {
        setCategory(categoryId);
    }

    //aula 5 (01:06)
    async function handleSave() {
        if(category === '' || !guild.id  || day === '' || month === '' || hour === '' || minute === '' || description === ''){
            Alert.alert('Prencha os campos antes de agendar.')
        }else{
            const newAppointment = {
                id: uuid.v4(),
                guild,
                category,
                date: `${day}/${month} às ${hour}:${minute}h`,
                description
            };
    
            const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
            const appointments = storage ? JSON.parse(storage) : [];
    
            await AsyncStorage.setItem(
                COLLECTION_APPOINTMENTS,
                JSON.stringify([ ...appointments, newAppointment ])
            );
    
            navigation.navigate("Home");
        }
        
    }

    return (
        <KeyboardAvoidingView
            //behavior é para melhorar a experiencia na hora de digitar o texto aula 03 (01:33)
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar Seção"
                    />

                    <Text style={[
                        styles.label,
                        { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}
                    >
                        Categorias
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        CategorySelected={category}
                    />

                    <View style={styles.form}>
                        <TouchableOpacity onPress={handleOpenGuilds}>
                            <View style={styles.select}>
                                {
                                    guild.icon
                                        ? <GuildIcon guildId={guild.id} iconId={guild.icon}/>
                                        : <View style={styles.image} />
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={tema.colors.heading}
                                    size={18}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, { marginBottom: 12 }]}>
                                    Hora e Minuto
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2} 
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute} 
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <Button 
                                title='Agendar' 
                                //aula 5 (01:11)
                                onPress={handleSave} 
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>

            <ModalView visible={openGuildsModal} closeModal={handleCloseGuilds}>
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>

        </KeyboardAvoidingView>
    )
}