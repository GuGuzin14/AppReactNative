import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Listar Funcionários"
                onPress={() => navigation.navigate('ListaFuncionarios')}
                style={styles.button}
            />
            <Button
                title="Listar Cargos"
                onPress={() => navigation.navigate('ListaCargos')}
                style={styles.button}
            />
            <Button
                title="Listar Turnos"
                onPress={() => navigation.navigate('ListaTurnos')}
                style={styles.button}
            />
            <Button
                title="Listar Registros de Ponto"
                onPress={() => navigation.navigate('ListaRegistrosPonto')}
                style={styles.button}
            />
            <Button
                title="Criar Funcionário"
                onPress={() => navigation.navigate('CriarFuncionario')}
                style={styles.button}
            />
            <Button
                title="Criar Cargo"
                onPress={() => navigation.navigate('CriarCargo')}
                style={styles.button}
            />
            <Button
                title="Criar Turno"
                onPress={() => navigation.navigate('CriarTurno')}
                style={styles.button}
            />
            <Button
                title="Criar Registro de Ponto"
                onPress={() => navigation.navigate('CriarRegistroPonto')}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        marginVertical: 10,
    },
});

export default HomeScreen;