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
    color:"grey",
    fontSize:20
  },

  inputText:{
    height:50,
    fontSize: 20,
    color:"black",
    borderColor: 'black',
    marginBottom: 25,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: "grey",
    width: 250,
    height: 40,
  },

  loginBtn:{
    width:"25%",
    backgroundColor:"black",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    marginBottom:10
  },
  loginText :{
      color: "white"
  },
  body:{
    fontSize:20,
    marginBottom: 5,
    color: "grey"
  }




});