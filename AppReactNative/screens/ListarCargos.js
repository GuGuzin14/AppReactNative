import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import api from '../api';

const ListaCargosScreen = ({ navigation }) => {
    const [cargos, setCargos] = useState([]);

    useEffect(() => {
        const fetchCargos = async () => {
            try {
                const response = await api.get('/cargos');
                setCargos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCargos();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={cargos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <Button
                            title="Detalhes"
                            onPress={() => navigation.navigate('DetalhesCargo', { id: item.id })}
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

export default ListaCargosScreen;