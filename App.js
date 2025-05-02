import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './Views/Navbar';
import Screen1 from './Views/Screen1';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Screen2 from './Views/Screen2';
export default function App() {

const Stack = createNativeStackNavigator();

  return (
 
     <RecoilRoot>
     <NavigationContainer>
      <Stack.Navigator initialRouteName='S1'>
        <Stack.Screen name='S1' component={Screen1}
        options={{
          headerStyle:{
            backgroundColor:'Blue',
          
          },
          headerTitleAlign:'center',
          title:'Home',
          
        }}
        />
        <Stack.Screen name='S2' component={Screen2}
        options={{
          headerStyle:{
            backgroundColor:'black'
          },
          headerTitleStyle:{
            fontWeight:'bold',
            color:'white'
          },
          headerTintColor:'white',
          title:'Back',
          headerTitleAlign:'center',
          
        }}
        />
        
      </Stack.Navigator>
     </NavigationContainer>
     </RecoilRoot>
   
  
  );
}

const styles = StyleSheet.create({

});
