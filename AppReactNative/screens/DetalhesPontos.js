import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const DetalhesRegistroPontoScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [funcionario_id, setFuncionarioId] = useState('');
    const [data_registro, setDataRegistro] = useState('');
    const [horario_registro, setHorarioRegistro] = useState('');
    const [tipo, setTipo] = useState('');

    useEffect(() => {
        const fetchRegistro = async () => {
            try {
                const response = await api.get(`/pontos/${id}`);
                setFuncionarioId(response.data.funcionario_id.toString());
                setDataRegistro(response.data.data_registro);
                setHorarioRegistro(response.data.horario_registro);
                setTipo(response.data.tipo);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRegistro();
    }, [id]);

    const atualizarRegistro = async () => {
        try {
            await api.put(`/pontos/${id}`, { funcionario_id, data_registro, horario_registro, tipo });
            alert('Registro de ponto atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    const excluirRegistro = async () => {
        try {
            await api.delete(`/pontos/${id}`);
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
                placeholder="Data (YYYY-MM-DD)"
                value={data_registro}
                onChangeText={setDataRegistro}
                style={styles.input}
            />
            <TextInput
                placeholder="Hora (HH:MM:SS)"
                value={horario_registro}
                onChangeText={setHorarioRegistro}
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