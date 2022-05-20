import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    const { user, singOut } = useAuth();

//aula 5 (01:52)
function handleSignOut() {
    Alert.alert('Logout', 'deseja sair do GamePlay ?',
    [
        {
            text: 'Não',
            style: 'cancel'
        },
        {
            text: 'Sim',
            onPress: () => singOut()
        }
    ])
}

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleSignOut}>
                <Avatar urlImage={user.avatar}/>
            </TouchableOpacity>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        { user.firstName }
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de aventura
                </Text>
            </View>
        </View>
    )
}