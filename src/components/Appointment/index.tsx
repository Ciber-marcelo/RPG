import React from 'react';
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import UserSvg from '../../assets/usuario.svg';
import CalendarSvg from '../../assets/calendario.svg';

import { GuildIcon } from '../GuildIcon'
import { tema } from '../../global/styles/tema';
import { categories } from '../../utils/categories';
import { GuildProps } from '../Guild';
import { LinearGradient } from 'expo-linear-gradient';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = TouchableOpacityProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category);
    const { owner } = data.guild;
    const { primary, on, sencodary50, sencodary70 } = tema.colors;

    return (
        <TouchableOpacity {...rest}>
            <View style={styles.container}>

                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[sencodary50, sencodary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>

                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />

                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.usersInfo}>
                            <UserSvg fill={owner ? primary : on} style={{width: 10, height: 10}}/>

                            <Text style={[
                                styles.user,
                                { color: owner ? primary : on }
                            ]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}