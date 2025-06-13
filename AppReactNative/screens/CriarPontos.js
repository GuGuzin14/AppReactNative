import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api';

const CriarRegistroPontoScreen = ({ navigation }) => {
    const [funcionario_id, setFuncionarioId] = useState('');
    const [data_registro, setDataRegistro] = useState('');
    const [horario_registro, setHorarioRegistro] = useState('');
    const [tipo, setTipo] = useState('');

    const salvarRegistro = async () => {
        if (!funcionario_id || !data_registro || !horario_registro || !tipo) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
        try {
            const payload = {
                funcionario_id: Number(funcionario_id),
                data: data_registro,
                horario: horario_registro,
                tipo
            };
            await api.post('/pontos', payload);
            Alert.alert('Sucesso', 'Registro de ponto criado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            let msg = 'Erro ao criar registro de ponto.';
            if (error.response && error.response.data) {
                msg += '\n' + JSON.stringify(error.response.data);
            }
            Alert.alert('Erro', msg);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Funcionário ID"
                value={funcionario_id}
                onChangeText={setFuncionarioId}
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                placeholder="Data (YYYY-MM-DD)"
                value={data_registro}
                onChangeText={setDataRegistro}
                style={styles.input}
            />
            <TextInput
                placeholder="Horário (HH:MM:SS)"
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
            <Button title="Salvar" onPress={salvarRegistro} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CriarRegistroPontoScreen;