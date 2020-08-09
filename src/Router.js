import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import AddItem from './components/AddItem';
const Stack = createStackNavigator();
function Router({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{title: 'Add New Item'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
