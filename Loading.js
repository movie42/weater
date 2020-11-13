import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>WHAT THE WEATHER!</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:200,
        backgroundColor:"#7447E6"
    },
    text:{
        color:"#fff",
        fontSize:28
    }
})