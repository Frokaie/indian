import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from "react-native-elements" 
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import db from "../config"
import firebase from "firebase";


export default class LoginScreen extends React.Component{

constructor(){
    super();
    this.state={
        email:"",
        password:""
    }
}

onSignIn = googleUser => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!this.isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );

      // Sign in with credential from the Google user.
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(function (result) {
          if (result.additionalUserInfo.isNewUser) {
            firebase
              .database()
              .ref("/users/" + result.user.uid)
              .set({
                gmail: result.user.email,
                
                
                first_name: result.additionalUserInfo.profile.given_name,
                last_name: result.additionalUserInfo.profile.family_name,
               
              })
              .then(function (snapshot) {
                
               });
          }
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};

signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      behaviour: "web",
      androidClientId:
        "11275514462-o0qan720oota5l1p4kfm1rjqau6dv7p7.apps.googleusercontent.com",
      iosClientId:
        "11275514462-9j8pf7eur0dc5cpbjsjvc4mcl8l90n9f.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      this.onSignIn(result);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    console.log(e.message);
    return { error: true };
  }
};


    render()
        {
            return(
                <View style={styles.container} >
                    <View style={styles.appTitle}>
                    <Image
            source={require("../assets/fork.png")}
            style={styles.forkIcon}
            ></Image>
            <Text style={styles.appTitleText}>Recipe App</Text>
            
            <Image
              source={require("../assets/logo.jpg")}
              style={styles.appIcon}
            ></Image>
            
          </View>
                   
                   
                   <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signInWithGoogleAsync()}
            >
              <Image
                source={require("../assets/google_icon.png")}
                style={styles.googleIcon}
              ></Image>
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
                   
                 </View>
            )
        }
    
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white"
    },
    inputEmail: {
        height: 50,
        width:"30%",
        marginTop:50,
        fontSize:20,
        color:"white",
        borderWidth: 3,
    
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
      inputPassword: {
        height: 50,
        width:"30%",
        marginTop:50,
        fontSize:20,
        borderWidth: 3,
    
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
      forkIcon:{
        width: RFValue(50),
        height: RFValue(50),
        resizeMode: "contain",
        alignSelf:"left",
        marginTop:50,
        
      },
      appIcon: {
        width: RFValue(150),
        height: RFValue(150),
        resizeMode: "contain",
        alignSelf:"center"
      },
      appTitleText: {
        color: "Black",
        textAlign: "center",
        fontSize: RFValue(40),
        fontFamily: "Bubblegum-Sans",
        marginTop:0
      },
      buttonContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        marginTop:50
      },
      button: {
        width: RFValue(250),
        height: RFValue(50),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: RFValue(30),
        backgroundColor: "lightgrey"
      },
      googleIcon: {
        width: RFValue(30),
        height: RFValue(30),
        resizeMode: "contain"
      },
      googleText: {
        color: "black",
        fontSize: RFValue(20),
        fontFamily: "Bubblegum-Sans"
      },
})

