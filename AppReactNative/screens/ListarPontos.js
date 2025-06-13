import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import api from '../api';

const ListaRegistrosPontoScreen = ({ navigation }) => {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        const fetchRegistros = async () => {
            try {
                const response = await api.get('/pontos');
                setRegistros(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRegistros();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={registros}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Funcionário ID: {item.funcionario_id}</Text>
                        <Text>Data: {item.data_registro}</Text>
                        <Text>Hora: {item.horario_registro}</Text>
                        <Text>Tipo: {item.tipo}</Text>
                        <Button
                            title="Detalhes"
                            onPress={() => navigation.navigate('Detalhes Registro de Ponto', { id: item.id })}
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

export default ListaRegistrosPontoScreen;