import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import ListaFuncionariosScreen from './screens/ListarFuncionarios';
import ListaCargosScreen from './screens/ListarCargos';
import ListaTurnosScreen from './screens/ListarTurnos';
import ListaRegistrosPontoScreen from './screens/ListarPontos';
import CriarFuncionarioScreen from './screens/CriarFuncionarios';
import CriarCargoScreen from './screens/CriarCargos';
import CriarTurnoScreen from './screens/CriarTurnos';
import CriarRegistroPontoScreen from './screens/CriarPontos';
import DetalhesFuncionarioScreen from './screens/DetalhesFuncionarios';
import DetalhesCargoScreen from './screens/DetalhesCargos';
import DetalhesTurnoScreen from './screens/DetalhesTurnos';
import DetalhesRegistroPontoScreen from './screens/DetalhesPontos';

export default function App() {
  const Drawer = createDrawerNavigator();

  function DrawerNavigation() {
    return (
      <Drawer.Navigator>
        {/* Tela inicial */}
        <Drawer.Screen name="Home" component={HomeScreen} />

        {/* Listagem */}
        <Drawer.Screen name="Lista de Funcionários" component={ListaFuncionariosScreen} />
        <Drawer.Screen name="Lista de Cargos" component={ListaCargosScreen} />
        <Drawer.Screen name="Lista de Turnos" component={ListaTurnosScreen} />
        <Drawer.Screen name="Lista de Registros de Ponto" component={ListaRegistrosPontoScreen} />

        {/* Criação */}
        <Drawer.Screen name="Criar Funcionário" component={CriarFuncionarioScreen} />
        <Drawer.Screen name="Criar Cargo" component={CriarCargoScreen} />
        <Drawer.Screen name="Criar Turno" component={CriarTurnoScreen} />
        <Drawer.Screen name="Criar Registro de Ponto" component={CriarRegistroPontoScreen} />

        {/* Detalhes (ocultados do menu) */}
        <Drawer.Screen
          name="Detalhes Funcionário"
          component={DetalhesFuncionarioScreen}
          options={{ drawerItemStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="Detalhes Cargo"
          component={DetalhesCargoScreen}
          options={{ drawerItemStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="Detalhes Turno"
          component={DetalhesTurnoScreen}
          options={{ drawerItemStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name="Detalhes Registro de Ponto"
          component={DetalhesRegistroPontoScreen}
          options={{ drawerItemStyle: { display: 'none' } }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}