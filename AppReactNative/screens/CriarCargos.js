import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const CriarCargoScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');

    const salvarCargo = async () => {
        try {
            await api.post('/cargos', { nome });
            alert('Cargo criado com sucesso!');
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
            <Button title="Salvar" onPress={salvarCargo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CriarCargoScreen;