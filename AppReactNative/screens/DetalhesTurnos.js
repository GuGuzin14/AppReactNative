import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api';

const DetalhesTurnoScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [periodo, setPeriodo] = useState('');
    const [horarioInicio, setHorarioInicio] = useState('');
    const [horarioFim, setHorarioFim] = useState('');

    useEffect(() => {
        const fetchTurno = async () => {
            try {
                const response = await api.get(`/turnos/${id}`);
                setPeriodo(response.data.periodo || '');
                setHorarioInicio(response.data.horario_inicio || '');
                setHorarioFim(response.data.horario_fim || '');
            } catch (error) {
                console.log(error);
            }
        };
        fetchTurno();
    }, [id]);

    const atualizarTurno = async () => {
        try {
            await api.put(`/turnos/${id}`, {
                periodo,
                horario_inicio: horarioInicio,
                horario_fim: horarioFim
            });
            alert('Turno atualizado com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    const excluirTurno = async () => {
        try {
            await api.delete(`/turnos/${id}`);
            alert('Turno excluído com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Período do Turno"
                value={periodo}
                onChangeText={setPeriodo}
                style={styles.input}
            />
            <TextInput
                placeholder="Horário de Início"
                value={horarioInicio}
                onChangeText={setHorarioInicio}
                style={styles.input}
            />
            <TextInput
                placeholder="Horário de Fim"
                value={horarioFim}
                onChangeText={setHorarioFim}
                style={styles.input}
            />
            <Button title="Atualizar" onPress={atualizarTurno} />
            <Button title="Excluir" onPress={excluirTurno} color="red" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
});

export default DetalhesTurnoScreen;