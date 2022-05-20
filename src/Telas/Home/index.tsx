import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider2 } from '../../components/ListDivider2';

import { styles } from './styles';
import { propsStack } from '../../routes/app.routes';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { Load } from '../../components/Load';

export function Home() {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation = useNavigation<propsStack>();

    //aula 5 (01:24), o VSCODE considera como erro, mas funciona
    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', { guildSelected });
    }

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    //aula 5 (01:15)
    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if (category) {
            setAppointments(storage.filter(item => item.category === category));
        } else {
            setAppointments(storage)
        }
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={() => navigation.navigate("AppointmentCreate")}
                />
            </View>

            <CategorySelect
                CategorySelected={category}
                setCategory={handleCategorySelect}
            />

            {
                loading ? <Load />
                    :
                    <>
                        <ListHeader
                            title="Seções agendadas"
                            subtitle={`Total ${appointments.length}`}
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Appointment
                                    data={item}
                                    //aula 5
                                    onPress={() => handleAppointmentDetails(item)}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListDivider2 />}
                            contentContainerStyle={{ paddingBottom: 68 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
            }
        </Background>
    )
}