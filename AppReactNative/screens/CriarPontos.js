import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const CriarRegistroPontoScreen = ({ navigation }) => {
    const [funcionario_id, setFuncionarioId] = useState('');
    const [data_hora, setDataHora] = useState('');
    const [tipo, setTipo] = useState('');

    const salvarRegistro = async () => {
        try {
            await api.post('/registros_ponto', { funcionario_id, data_hora, tipo });
            alert('Registro de ponto criado com sucesso!');
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
            <Button title="Salvar" onPress={salvarRegistro} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CriarRegistroPontoScreen;