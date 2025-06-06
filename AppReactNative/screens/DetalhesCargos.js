import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const DetalhesCargoScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [nome, setNome] = useState('');

    useEffect(() => {
        const fetchCargo = async () => {
            try {
                const response = await api.get(`/cargos/${id}`);
                setNome(response.data.nome);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCargo();
    }, [id]);

    const atualizarCargo = async () => {
        try {
            await api.put(`/cargos/${id}`, { nome });
            alert('Cargo atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    const excluirCargo = async () => {
        try {
            await api.delete(`/cargos/${id}`);
            alert('Cargo excluído com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nome do Cargo"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />
            <Button title="Atualizar" onPress={atualizarCargo} />
            <Button title="Excluir" onPress={excluirCargo} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default DetalhesCargoScreen;