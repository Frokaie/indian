import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./bottomTabNavigator";
import IndianRecipe from "../Screens/IndianRecipe";
import Catagories from "../Screens/catagories";
import AmericanRecipe from "../Screens/AmericanRecipe";
import ChineseRecipe from "../Screens/ChineseRecipe";
import ItalianRecipe from "../Screens/ItalianRecipe";


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="IndianRecipe" component={IndianRecipe} />
      <Stack.Screen name="AmericanRecipe" component={AmericanRecipe}/>
      <Stack.Screen name="ChineseRecipe" component={ChineseRecipe}/>
      <Stack.Screen name="ItalianRecipe" component={ItalianRecipe}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
