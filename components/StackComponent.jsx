import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/ex10/HomeScreen';
import ProfileScreen from '../pages/ex10/ProfileScreen';

const Stack = createStackNavigator(); 

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Stack.Navigator>
  );
};

export default NavigationStack;