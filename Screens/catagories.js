import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements" 
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import db from "../config"
import firebase from "firebase";
import IndianRecipe from "./IndianRecipe";
import AmericanRecipe from "./AmericanRecipe";
import ChineseRecipe from "./ChineseRecipe";
import ItalianRecipe from "./ItalianRecipe";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };

export default class Catagories extends React.Component{
    render(){
        return(
            <View style={styles .container}>
               <Text style={styles.title}>Catagories</Text>
                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(IndianRecipe)}
                >
                    <Text style={styles.buttonText}>Indian Recipe's</Text>
                    <Image
                     source={require("../assets/indian.jpg")}
                     style={styles.iconImage}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(AmericanRecipe)}
                >
                    <Text style={styles.buttonText}>American Recipe's</Text>
                    <Image
                     source={require("../assets/american.jpg")}
                     style={styles.iconImage}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(ChineseRecipe)}
                >
                    <Text style={styles.buttonText}>Chinese Recipe's</Text>
                    <Image
                     source={require("../assets/chinese.jpg")}
                     style={styles.iconImage}
                    ></Image>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles .button}
                onPress={()=>this.props.navigation.navigate(ItalianRecipe)}
                >
                    <Text style={styles.buttonText}>Italian Recipe's</Text>
                    <Image
                     source={require("../assets/italian.jpg")}
                     style={styles.iconImage}
                    ></Image>
                </TouchableOpacity>
            </View>
        )
    }

    
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#15193c"
    },
    button:{
        width:RFValue(200),
        height:RFValue(45),
        backgroundColor:"#beb5ff",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:20,
        borderRadius:50
    },
    buttonText:{
        fontSize:40,
        fontWeight:"bold",
        fontFamily: "Bubblegum-Sans",
    },
    title:{
        color: "white",
        textAlign: "center",
        fontSize: RFValue(40),
        fontFamily: "Bubblegum-Sans",
        marginTop:0

    },
    iconImage: {
        width: "50%",
        height: "50%",
        resizeMode: "contain"
      },
})