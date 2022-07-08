import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import firebase from "firebase";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class IndianRecipe extends React.Component{
    render(){
        return(
<View style={styles.container}>
     <View style={styles.cardContainer}>
        <Text style={styles.title}>Panner Butter Masala</Text>

        <Image
          source={require("../assets/indian1.jpg")}
          style={styles.iconImage}
        />

        <Text style={styles.titlesub}>Ingridients:-</Text>

        <Text style={styles.sub}>For masala paste:</Text>

     <Text style={styles.subpaste}>       
 2 tbsp oil, 2 tbsp butter, 5 cloves, 2 pods cardamom, 2 onion (sliced), 2 clove garlic, 
 1 inch ginger, 3 tomato (sliced), 15 cashew
    </Text>

<Text style={styles.sub}>For curry:</Text>

    <Text style={styles.subpaste}>
2 tbsp oil, 2 tbsp butter, 1 bay leaf, 1 chilli ,1 onion (finely chopped), ½ tsp turmeric, 1 tsp chilli powder,
¾ tsp coriander powder, ¼ tsp cumin powder, ½ garam masala, 1 tsp salt, 1 cup water, 2 tbsp cream, 16 cubes paneer,
1 tsp kasuri methi, 2 tbsp coriander (finely chopped)
    </Text>
    <Text style={styles.titlesub}>Method:-</Text>

    <Text style={styles.sub}>How to make gravy base:</Text>

    <Text style={styles.subpaste}>firstly, in a large kadai heat 2 tbsp oil and 2 tbsp butter.
add 5 cloves, 2 pods cardamom and saute on low flame until it turns aromatic.
now add 2 onion, 2 clove garlic, 1 inch ginger.
saute until onions shrink slightly.
further add 3 tomato, 15 cashew and saute for 2 minutes.
cover and boil for 10 minutes, or until tomato softens.
cool completely and transfer to the blender and blend to smooth paste.
pass the curry to the filter to get rid of seeds and skin.
smooth and silky, the tomato-onion paste is ready. keep aside.</Text>

   <Text style={styles.sub}>How to make paneer butter masala:</Text>

   <Text style={styles.subpaste}>firstly, in a large kadai heat 2 tbsp oil, 2 tbsp butter, 1 bay leaf and 1 chilli. saute until the spices turn aromatic.
now add 1 onion and saute until onions turn and golden brown.
keeping the flame on low, add ½ tsp turmeric, 1 tsp chilli powder, ¾ tsp coriander powder, ¼ tsp cumin powder, ½ garam masala and 1 tsp salt.
saute until the spices turn aromatic. make sure not to burn the spices.
add in prepared onion tomato paste and mix well.
cook until the oil separates from the masala paste.
now add 1 cup water and mix well adjusting the consistency.
further, add in 2 tbsp cream and mix well.
also, add 16 cubes of paneer and mix gently.
simmer for 5 minutes, or until the paneer absorbs the flavour.
add 1 tsp kasuri methi and 2 tbsp coriander. mix well.
finally, enjoy paneer butter masala with roti or naan.</Text>
    </View>
</View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f75c47"
      },
      iconImage: {
        width: "50%",
        height: "35%",
        marginTop:10
      },
      title:{
        fontFamily: "Bubblegum-Sans",
        fontSize:RFValue(18),
        fontWeight:"bold",
       
      },
      cardContainer:{
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"#beb5ff",
        borderRadius:50,
        marginTop:20,
        width:RFValue(400),
        height:RFValue(400)
      },
      titlesub:{
        fontSize:RFValue(11),
        fontWeight:"bold",
        fontFamily: "Bubblegum-Sans",
        alignSelf:"flex-start"
      },
      sub:{
        fontSize:RFValue(8),
        alignSelf:"flex-start"
      },
      subpaste:{
        fontSize:RFValue(7)
      }
})