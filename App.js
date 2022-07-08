import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./Screens/LoginScreen";
import Catagories from './Screens/catagories';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/stackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';

export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <DrawerNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
