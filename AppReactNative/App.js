import HomeScreen from './screens/HomeScreen';
import ListaUsuariosScreen from './screens/ListaUsuariosScreen';
import DetalhesUsuarioScreen from './screens/DetalhesUsuarioScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

export default function App() {

  const Drawer = createDrawerNavigator();

  function DrawerNavigation(){
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Lista de Usuários" component={ListaUsuariosScreen}/>
        <Drawer.Screen name="DetalhesUsuario" component={DetalhesUsuarioScreen}
        options={{
          drawerItemStyle: {display: 'none'}, 
        }}/>
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <DrawerNavigation/>
    </NavigationContainer>
  );
}

