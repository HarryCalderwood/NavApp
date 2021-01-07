import {StyleSheet, Dimensions} from 'react-native'

const height = Dimensions.get('window').height

export const styles=StyleSheet.create({
center: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    fontSize:36,
    marginBottom: 16,
},
inputView:{
    width:"100%",
    backgroundColor:"green",
    borderRadius:25,
    height:100,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  forgot:{
      marginTop: 60,
    color:"black",
    fontSize:20
  },

  inputText:{
    height:50,
    fontSize: 20,
    color:"black"
  },

  loginBtn:{
    width:"25%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:80,
    marginBottom:10
  },
  loginText :{
      color: "white"

  }




});