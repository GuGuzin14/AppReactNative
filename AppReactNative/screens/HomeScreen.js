import React from 'react';
import { Button,Text, StyleSheet, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Bem-vindo ao sistema de gerenciamento de funcionários!</Text>
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