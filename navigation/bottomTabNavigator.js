import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import firebase from "firebase";
import Catagories from "../Screens/catagories";
import CreateRecipe from "../Screens/createRecipe";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render(){
        return(
            <Tab.Navigator
            labeled={false}
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Catagories") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Create Recipe") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={RFValue(25)}
                color={color}
                style={styles.icons}
              />
            );
          }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
        tabBarOptions={{
            activeTintColor:"#ee8249",
        inactiveTintColor:"gray"
        }}
            >
               
                <Tab.Screen
                name="Catagories" component={Catagories}
                options={{ headerShown:false }}

                />
                 <Tab.Screen
                name="Create Recipe" component={CreateRecipe}
                options={{ headerShown:false }}
                />
                
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
   
    icons: {
      width: RFValue(30),
      height: RFValue(30)
    }
  });
