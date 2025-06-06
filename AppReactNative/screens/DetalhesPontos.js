import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const DetalhesRegistroPontoScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [funcionario_id, setFuncionarioId] = useState('');
    const [data_hora, setDataHora] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        const fetchRegistro = async () => {
            try {
                const response = await api.get(`/registros_ponto/${id}`);
                setFuncionarioId(response.data.funcionario_id.toString());
                setDataHora(response.data.data_hora);
                setTipo(response.data.tipo);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRegistro();
    }, [id]);

    const atualizarRegistro = async () => {
        try {
            await api.put(`/registros_ponto/${id}`, { funcionario_id, data_hora, tipo });
            alert('Registro de ponto atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    const excluirRegistro = async () => {
        try {
            await api.delete(`/registros_ponto/${id}`);
            alert('Registro de ponto excluído com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Funcionário ID"
                value={funcionario_id}
                onChangeText={setFuncionarioId}
                style={styles.input}
            />
            <TextInput
                placeholder="Data/Hora (YYYY-MM-DD HH:MM:SS)"
                value={data_hora}
                onChangeText={setDataHora}
                style={styles.input}
            />
            <TextInput
                placeholder="Tipo (Entrada/Saída)"
                value={tipo}
                onChangeText={setTipo}
                style={styles.input}
            />
            <Button title="Atualizar" onPress={atualizarRegistro} />
            <Button title="Excluir" onPress={excluirRegistro} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default DetalhesRegistroPontoScreen;