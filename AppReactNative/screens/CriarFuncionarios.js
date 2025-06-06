import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const CriarFuncionarioScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [cargo_id, setCargoId] = useState('');
    const [turno_id, setTurnoId] = useState('');

    const salvarFuncionario = async () => {
        try {
            await api.post('/funcionarios', { nome, cargo_id, turno_id });
            alert('Funcionário criado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />
            <TextInput
                placeholder="Cargo ID"
                value={cargo_id}
                onChangeText={setCargoId}
                style={styles.input}
            />
            <TextInput
                placeholder="Turno ID"
                value={turno_id}
                onChangeText={setTurnoId}
                style={styles.input}
            />
            <Button title="Salvar" onPress={salvarFuncionario} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CriarFuncionarioScreen;