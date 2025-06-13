import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import api from '../api';

const ListaFuncionariosScreen = ({ navigation }) => {
    const [funcionarios, setFuncionarios] = useState([]);

    useEffect(() => {
        const fetchFuncionarios = async () => {
            try {
                const response = await api.get('/funcionarios');
                setFuncionarios(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchFuncionarios();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={funcionarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <Button
                            title="Detalhes"
                            onPress={() => navigation.navigate('Detalhes Funcionário', { id: item.id })}
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

export default ListaFuncionariosScreen;