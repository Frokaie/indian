import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator";
import ProfileScreen from "../Screens/ProfileScreen";


const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {

    

  

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: "#af34c2",
          itemStyle: { marginVertical: 5 }
        }}
        
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ unmountOnBlur: true }}
        />
        
      </Drawer.Navigator>
    );
  }
}