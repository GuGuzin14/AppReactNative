import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const CriarTurnoScreen = ({ navigation }) => {
    const [periodo, setPeriodo] = useState('');
    const [horario_inicio, setHorarioInicio] = useState('');
    const [horario_fim, setHorarioFim] = useState('');

    const salvarTurno = async () => {
        try {
            await api.post('/turnos', { periodo, horario_inicio, horario_fim });
            alert('Turno criado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Período (Manhã, Tarde, Noite, Madrugada)"
                value={periodo}
                onChangeText={setPeriodo}
                style={styles.input}
            />
            <TextInput
                placeholder="Horário de Início (HH:MM:SS)"
                value={horario_inicio}
                onChangeText={setHorarioInicio}
                style={styles.input}
            />
            <TextInput
                placeholder="Horário de Fim (HH:MM:SS)"
                value={horario_fim}
                onChangeText={setHorarioFim}
                style={styles.input}
            />
            <Button title="Salvar" onPress={salvarTurno} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default CriarTurnoScreen;