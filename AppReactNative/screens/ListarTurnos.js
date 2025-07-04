import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import api from '../api';

const ListaTurnosScreen = ({ navigation }) => {
    const [turnos, setTurnos] = useState([]);

    useEffect(() => {
        const fetchTurnos = async () => {
            try {
                const response = await api.get('/turnos');
                setTurnos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTurnos();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={turnos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.periodo}</Text>
                        <Button
                            title="Detalhes"
                            onPress={() => navigation.navigate('Detalhes Turno', { id: item.id })}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    item: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default ListaTurnosScreen;